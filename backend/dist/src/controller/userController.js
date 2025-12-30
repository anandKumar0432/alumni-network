import { prisma } from "../lib/prisma.js";
import { safeUserSelect } from "../lib/selectors/userSelector.js";
export const findUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                ...safeUserSelect,
            }
        });
        if (!user) {
            return res.status(404).json({
                msg: "user not found"
            });
        }
        return res.status(200).json({
            msg: "data fetched successfully",
            user,
        });
    }
    catch (e) {
        return res.status(500).json({
            msg: "something went wrong"
        });
    }
};
export const findAllStudent = async (req, res) => {
    try {
        const students = await prisma.user.findMany({
            where: {
                role: "STUDENT",
                student: {
                    status: "VERIFIED"
                }
            },
            select: {
                ...safeUserSelect
            }
        });
        if (!students) {
            return res.status(404).json({
                msg: "students not found"
            });
        }
        return res.status(200).json({
            msg: "students are found",
            students,
        });
    }
    catch (e) {
        return res.status(500).json({
            msg: "something went wrong",
        });
    }
};
export const findAllAlumni = async (req, res) => {
    try {
        const alumnis = await prisma.user.findMany({
            where: {
                role: "ALUMNI",
                alumni: {
                    status: "VERIFIED"
                }
            }
        });
        if (!alumnis) {
            return res.status(404).json({
                msg: "alumnis not found"
            });
        }
    }
    catch (e) {
        return res.status(500).json({
            msg: "something went wrong"
        });
    }
};
