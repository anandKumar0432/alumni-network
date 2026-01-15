import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import { signupSchema, loginSchema } from "../types/zodSchema.js";
import crypto from "crypto";
import { sendVerificationEmail } from "../lib/mailer.js";
const JWT_SECRET = process.env.JWT_SECRET;
const signup = async (req, res) => {
    try {
        const parsed = signupSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                msg: "Invalid input",
            });
        }
        const data = parsed.data;
        const existingUser = await prisma.user.findUnique({
            where: {
                email: data.email,
            }
        });
        if (existingUser) {
            return res.status(400).json({ msg: "user already exists!" });
        }
        const hashPassword = await bcrypt.hash(data.password, 10);
        const emailToken = crypto.randomBytes(32).toString("hex");
        const user = await prisma.user.create({
            data: {
                email: data.email,
                password: hashPassword,
                regNo: data.regNo,
                branch: data.branch,
                session: data.session,
                role: data.role,
                name: data.name,
                emailToken: emailToken,
                emailTokenExp: new Date(Date.now() + 24 * 60 * 60 * 1000),
                student: data.role === "STUDENT"
                    ? {
                        create: {
                            currentYear: data.student.currentYear,
                            interest: data.student.interest,
                            status: "PENDING"
                        }
                    }
                    : undefined,
                alumni: data.role === "ALUMNI"
                    ? {
                        create: {
                            currentJob: data.alumni.currentJob,
                            currentCompany: data.alumni.currentCompany,
                            linkedIn: data.alumni.linkedIn,
                            instagram: data.alumni.instagram,
                            portfolio: data.alumni.portfolio,
                            status: "PENDING",
                        }
                    }
                    : undefined,
            }
        });
        await sendVerificationEmail(data.email, emailToken);
        return res.status(201).json({
            msg: "signup successfull, Awaiting for verification",
            userId: user.id,
        });
    }
    catch (e) {
        return res.status(500).json({ msg: "something went wrong!" });
    }
};
const login = async (req, res) => {
    try {
        const parsed = loginSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                msg: "Invalid input",
            });
        }
        const data = parsed.data;
        const user = await prisma.user.findUnique({
            where: {
                email: data.email,
            },
            include: {
                student: true,
                alumni: true,
            }
        });
        if (!user) {
            return res.status(400).json({
                msg: "email or password incorrect"
            });
        }
        if (!user.emailVerified) {
            return res.status(400).json({
                msg: "Email not verified"
            });
        }
        // checking the status
        if ((user.role === "STUDENT" && user.student?.status !== "VERIFIED") ||
            (user.role === "ALUMNI" && user.alumni?.status !== "VERIFIED")) {
            return res.status(403).json({
                msg: "account not verified by admin"
            });
        }
        const passMatched = await bcrypt.compare(data.password, user.password);
        if (!passMatched) {
            return res.status(400).json({
                msg: "email or password incorrect",
            });
        }
        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        //console.log("TOKEN => ", token);
        return res.status(200).json({
            msg: "login successfully",
            token, //returning token
        });
    }
    catch (e) {
        return res.status(500).json({
            msg: "something went wrong!"
        });
    }
};
const logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "producttion",
        sameSite: "strict",
    });
    return res.status(200).json({
        msg: "logout successfully"
    });
};
const verifyEmail = async (req, res) => {
    const emailToken = typeof req.query.token === "string" ? req.query.token : undefined;
    if (!emailToken) {
        return res.status(400).json({
            msg: "Invalid or missing email token",
        });
    }
    const user = await prisma.user.findFirst({
        where: {
            emailToken: emailToken,
            emailTokenExp: {
                gt: new Date(),
            }
        }
    });
    if (!user) {
        return res.status(400).json({
            msg: "Invalid or Expired Email Token",
        });
    }
    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            emailVerified: true,
            emailToken: null,
            emailTokenExp: null
        }
    });
    return res.status(200).json({
        msg: "Email verified successfully"
    });
};
export { signup, login, logout, verifyEmail };
