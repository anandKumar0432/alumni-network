import { prisma } from "../lib/prisma.js";
import { safeUserSelect } from "../lib/selectors/userSelector.js";
import { signupSchema } from "../types/zodSchema.js";
import bcrypt from "bcrypt";
import { Status, Role } from "../../generated/prisma/enums.js";
import { Prisma } from "../../generated/prisma/client.js";
export const updateUserStatus = async (req, res) => {
    try {
        const userId = req.params.id;
        const status = req.body.status;
        if (!userId) {
            return res.status(400).json({
                msg: "Invalid userId",
            });
        }
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                student: true,
                alumni: true,
            },
        });
        if (!user) {
            return res.status(400).json({
                msg: "user not found",
            });
        }
        let oldStatus = "PENDING";
        if (user.role == "STUDENT") {
            oldStatus = user.student?.status ?? "PENDING";
            if (oldStatus === status) {
                return res.status(400).json({ msg: "User already has this status" });
            }
            await prisma.student.update({
                where: {
                    userId,
                },
                data: {
                    status: status,
                },
            });
        }
        if (user.role == "ALUMNI") {
            oldStatus = user.alumni?.status ?? "PENDING";
            if (oldStatus === status) {
                return res.status(400).json({ msg: "User already has this status" });
            }
            await prisma.alumni.update({
                where: {
                    userId,
                },
                data: {
                    status: status,
                },
            });
        }
        // audit log
        await prisma.approvalLog.create({
            data: {
                targetType: user.role,
                targetId: userId,
                oldStatus,
                newStatus: status,
                actionById: req.user.id,
            },
        });
        return res.status(200).json({
            msg: "user verified successfully",
        });
    }
    catch (e) {
        return res.status(500).json({
            msg: "verification failed",
        });
    }
};
// export const unverifiedUser = async (req: Request, res: Response)=>{
//     try{
//         const unverifiedUsers = prisma.user.findMany({
//             where: {
//                 student: {
//                     status: "PENDING",
//                 },
//                 alumni: {
//                     status: "PENDING"
//                 }
//             },
//             select: {
//                 ...safeUserSelect
//             }
//         })
//         if(!unverifiedUsers){
//             return res.status(404).json({
//                 msg: "there is no any unverified users"
//             })
//         }
//         return res.status(201).json({
//             msg: "user successfully fetched",
//             unverifiedUsers,
//         })
//     } catch(e){
//         return res.status(500).json({
//             msg: "something went wrong",
//         })
//     }
// }
export const unverifiedUser = async (req, res) => {
    try {
        const { search = "", branch = "", role = "", session = "", page = "1", limit = "10", } = req.query;
        const pageNumber = Number(page) || 1;
        const pageSize = Number(limit) || 10;
        const skip = (pageNumber - 1) * pageSize;
        // search filter
        const searchFilter = search
            ? {
                OR: [
                    { name: { contains: String(search), mode: "insensitive" } },
                    { email: { contains: String(search), mode: "insensitive" } },
                    { regNo: { contains: String(search), mode: "insensitive" } },
                ],
            }
            : {};
        // ONLY pending users
        const pendingFilter = {
            OR: [
                { student: { is: { status: Status.PENDING } } },
                { alumni: { is: { status: Status.PENDING } } },
            ],
        };
        const andFilters = [];
        // always pending
        andFilters.push(pendingFilter);
        // search
        if (search) {
            andFilters.push({
                OR: [
                    { name: { contains: String(search), mode: "insensitive" } },
                    { email: { contains: String(search), mode: "insensitive" } },
                    { regNo: { contains: String(search), mode: "insensitive" } },
                ],
            });
        }
        // role (enum safe)
        if (role) {
            andFilters.push({ role: role });
        }
        // branch
        if (branch) {
            andFilters.push({ branch: String(branch) });
        }
        // session
        if (session) {
            andFilters.push({ session: String(session) });
        }
        const whereCondition = {
            AND: andFilters,
        };
        const [users, totalResults] = await Promise.all([
            prisma.user.findMany({
                where: whereCondition,
                skip,
                take: pageSize,
                orderBy: { createdAt: "desc" },
                include: {
                    student: true,
                    alumni: true,
                },
            }),
            prisma.user.count({
                where: whereCondition,
            }),
        ]);
        return res.status(200).json({
            msg: "unverified users fetched",
            totalResults,
            totalPages: Math.ceil(totalResults / pageSize),
            currentPage: pageNumber,
            data: users,
        });
    }
    catch (e) {
        console.error("unverifiedUser error:", e);
        return res.status(500).json({
            msg: "something went wrong",
        });
    }
};
export const changRole = async (req, res) => {
    try {
        const userId = req.params.id;
        const status = req.body;
        if (!userId) {
            return res.status(400).json({
                msg: "please provide the user Id",
            });
        }
        const existingUser = await prisma.user.findUnique({
            where: { id: userId },
            include: { student: true },
        });
        if (!existingUser) {
            return res.status(404).json({
                msg: "user not found",
            });
        }
        const user = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                student: {
                    upsert: {
                        update: {
                            status: status,
                        },
                        create: {
                            currentYear: existingUser.student?.currentYear ||
                                req.body.currentYear ||
                                "1",
                            status: status,
                        },
                    },
                },
            },
        });
        return res.status(200).json({
            msg: `status changeed to ${status}`,
        });
    }
    catch (e) {
        return res.status(500).json({
            msg: "something went wrong",
        });
    }
};
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            return res.status(401).json({
                msg: "userId not found",
            });
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (!existingUser) {
            return res.status(404).json({
                msg: "user not found",
            });
        }
        const user = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                isActive: false,
            },
        });
        return res.status(204).json({
            msg: "user deleted successfylly",
        });
    }
    catch (e) {
        return res.status(500).json({
            msg: "something went wrong",
        });
    }
};
// If needed then I can think about this as of now it is same as the signup
// export const createUser = async (req: Request, res: Response)=>{
//     try{
//         const parsed = signupSchema.safeParse(req.body);
//         if(!parsed.success){
//             return res.status(400).json({
//                 msg: "Invalid input",
//             })
//         }
//         const data = parsed.data;
//         const existingUser = await prisma.user.findUnique({
//             where: {
//                 email: data.email,
//             }
//         })
//         if(existingUser){
//             return res.status(401).json({
//                 msg : "user already exists",
//             })
//         }
//         const hashPassword = await bcrypt.hash(data.password, 10);
//         const user = await prisma.user.create({
//             data: {
//             }
//         })
//     }
// }
