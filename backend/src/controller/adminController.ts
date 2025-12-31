import type { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { safeUserSelect } from "../lib/selectors/userSelector.js";

// const verifyUserParamsSchema = z.object({
//   id: z.string().uuid(),
// });

export const verifyUser =async (req: Request, res: Response)=>{
    try{
        console.log(req.params.id);
        const userId = req.params.id;
        if(!userId){
            return res.status(400).json({
                msg : "Invalid userId"
            })
        }

        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                student : true,
                alumni: true,
            }, 
        })

        if(!user){
            return res.status(400).json({
                msg : "user not found",
            })
        }
        let oldStatus: "PENDING" | "REJECTED" | "VERIFIED" = "PENDING";
        if(user.role == "STUDENT"){
            oldStatus = user.student?.status??"PENDING";
            await prisma.student.update({
                where: {
                    userId,
                },
                data: {
                    status: "VERIFIED"
                }
            })
        }

        if(user.role == "ALUMNI"){
            oldStatus = user.alumni?.status ?? "PENDING";
            await prisma.alumni.update({
                where: {
                    userId,
                },
                data: {
                    status: "VERIFIED"
                }
            })
        }
        // audit log
        await prisma.approvalLog.create({
            data : {
                targetType: user.role,
                targetId: userId,
                oldStatus,
                newStatus: "VERIFIED",
                actionById: req.user.id,
            }
        })

        return res.status(200).json({
            msg: "user verified successfully"
        })
    }catch(e){
        return res.json(500).json({
            msg : "verification failed"
        })
    }
}

export const unverifiedUser = async (req: Request, res: Response)=>{
    try{
        const unverifiedUsers = prisma.user.findMany({
            where: {
                student: {
                    status: "PENDING",
                },
                alumni: {
                    status: "PENDING"
                }
            },
            select: {
                ...safeUserSelect
            }
        }) 
        if(!unverifiedUsers){
            return res.status(404).json({
                msg: "there is no any unverified users"
            })
        }
        return res.status(201).json({
            msg: "user successfully fetched",
            unverifiedUsers,
        })
    } catch(e){
        return res.status(500).json({
            msg: "something went wrong",
        })
    }
}

export const changRole = async (req: Request, res: Response)=>{
    try{
        const userId = req.params.id;
        const status = req.body;
        if(!userId){
            return res.status(400).json({
                msg: "please provide the user Id",
            })
        }
        const existingUser = await prisma.user.findUnique({
            where: {id : userId},
            include: { student: true }
        });
        if(!existingUser){
            return res.status(404).json({
                msg : "user not found",
            })
        }
        const user = await prisma.user.update({
            where:{
                id : userId,
            },
            data: {
                student: {
                    upsert:{
                        create: {
                            currentYear: existingUser.student?.currentYear || req.body.currentYear || "1",
                            status: status,
                        },
                        update: {
                            status: status,
                        }
                    }
                }
            }
        })
        return res.status(200).json({
            msg: `status changeed to ${status}`
        })
    } catch(e) {
        return res.status(500).json({
            msg: "something went wrong",
        })
    }
}
