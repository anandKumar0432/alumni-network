import type { NextFunction, Request, Response } from "express"
import { prisma } from "../lib/prisma.js"

export const isVerified = async (req: Request, res: Response, next: NextFunction)=>{
    try{
        const user = await prisma.user.findUnique({
            where: {id : req.user.id},
            include: {student: true, alumni: true},
        })
        
        if(!user){
            return res.status(404).json({
                msg : "user not found",
            })
        }
        
        if (user.role === "ADMIN") {
            return next();
        }

        if(
            (user.role === "STUDENT" && user.student?.status !== "VERIFIED") ||
            (user.role === "ALUMNI" && user.alumni?.status !== "VERIFIED")
            ) {
                return res.status(403).json({
                    msg : "Account not verified!"
                })
            }
            next();
    }catch(e){
        return res.status(500).json({
            msg : "something went wrong !"
        })
    }
}