import { prisma } from "../lib/prisma.js";
export const isActive = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            }
        });
        if (!user) {
            return res.status(404).json({
                msg: "user not found",
            });
        }
        if (!user.isActive) {
            return res.status(404).json({
                msg: "user not found",
            });
        }
        next();
    }
    catch (e) {
        return res.status(500).json({
            msg: "something went wrong"
        });
    }
};
