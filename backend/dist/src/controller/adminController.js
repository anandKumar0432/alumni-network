import { z } from "zod";
import { prisma } from "../lib/prisma.js";
// const verifyUserParamsSchema = z.object({
//   id: z.string().uuid(),
// });
const verifyUser = async (req, res) => {
    try {
        console.log(req.params.id);
        const userId = req.params.id;
        if (!userId) {
            return res.status(400).json({
                msg: "Invalid userId"
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
            await prisma.student.update({
                where: {
                    userId,
                },
                data: {
                    status: "VERIFIED"
                }
            });
        }
        if (user.role == "ALUMNI") {
            oldStatus = user.alumni?.status ?? "PENDING";
            await prisma.alumni.update({
                where: {
                    userId,
                },
                data: {
                    status: "VERIFIED"
                }
            });
        }
        // audit log
        await prisma.approvalLog.create({
            data: {
                targetType: user.role,
                targetId: userId,
                oldStatus,
                newStatus: "VERIFIED",
                actionById: req.user.id,
            }
        });
        return res.status(200).json({
            msg: "user verified successfully"
        });
    }
    catch (e) {
        return res.json(500).json({
            msg: "verification failed"
        });
    }
};
export { verifyUser };
