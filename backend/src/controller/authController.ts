import type { Request, Response } from "express";
import bcrypt from "bcrypt"
import { prisma } from "../lib/prisma.js";
import jwt from "jsonwebtoken"
import { signupSchema, loginSchema } from "../types/zodSchema.js";

const JWT_SECRET = process.env.JWT_SECRET;

const signup = async (req : Request, res: Response)=>{ 
    try{
        const parsed = signupSchema.safeParse(req.body);
        if(!parsed.success){
            return res.status(400).json({
                msg : "Invalid input",
            });
        }
        const data = parsed.data;
        console.log(data);
        const  existingUser = await prisma.user.findUnique({
            where:{
                email: data.email,
            }
        })
        if(existingUser){
            return res.status(400).json({msg : "user already exists!"})
        }
        const hashPassword = await bcrypt.hash(data.password, 10);
        console.log("hii there from the signup")
        const user = await prisma.user.create({
            data:{
                email: data.email,
                password: hashPassword,
                regNo : data.regNo,
                branch : data.branch,
                session : data.session,
                role: data.role,
                name: data.name,

                student:
                data.role === "STUDENT"
                ? {
                    create: {
                        currentYear: data.student.currentYear,
                        interest: data.student.interest,
                        status: "PENDING"
                    }
                }
                : undefined,

                alumni:
                data.role === "ALUMNI"
                ? {
                    create : {
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
        })
        console.log(user);
        return res.status(201).json({
            msg : "signup successfull, Awaiting for verification",
            userId: user.id,
        })
    }catch(e){
        return res.status(500).json({msg : "something went wrong!"});
    }
}

const login = async (req : Request, res : Response)=>{
    try{
        const parsed = loginSchema.safeParse(req.body);
        if(!parsed.success){
            return res.status(400).json({
                msg: "Invalid input",
            })
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
        })
        if(!user){
            return res.status(400).json({
                msg: "email or password incorrect"
            })
        }
        // checking the status
        if(
            (user.role === "STUDENT" && user.student?.status !== "VERIFIED") ||
            (user.role === "ALUMNI" && user.alumni?.status !== "VERIFIED")
        ){
            return res.status(403).json({
                msg: "account not verified by admin"
            })
        }

        const passMatched = await bcrypt.compare(data.password, user.password);
        if(!passMatched){
            return res.status(400).json({
                msg: "email or password incorrect",
            })
        }
        
        const token = jwt.sign(
            {id: user.id, role: user.role},
            JWT_SECRET!,
            {expiresIn: "7d"}
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        return res.status(200).json({
            msg: "login successfully",
        })
    }catch(e){
        return res.status(500).json({
            msg: "something went wrong!"
        })
    }
}

const logout = (req: Request, res: Response)=>{
    res.clearCookie("token" , {
        httpOnly: true,
        secure: process.env.NODE_ENV === "producttion",
        sameSite: "strict",
    })

    return res.status(200).json({
        msg: "logout successfully"
    })
}

export {signup, login, logout,};