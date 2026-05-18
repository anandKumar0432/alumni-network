import { error } from "node:console";
import { prisma } from "../lib/prisma.js";
import { createEventSchema } from "../types/zodSchema.js"
import type { Request, Response } from "express";


export const createEvent = async (req: Request, res: Response) => {
    const body = createEventSchema.safeParse(req.body);

    if(!body.success){
        return res.status(400).json({
            msg: "bad Input"
        })
    }

    const userId : string = req.user.id;

    try{
        await prisma.event.create({
            data: {
                title: body.data.title,
                description: body.data.description,
                startDateTime: body.data.startDateTime,
                endDateTime: body.data.endDateTime,
                bannerUrl: body.data.bannerUrl,
                venue: body.data.venue,
                formLink: body.data.formLink,
                createdById: userId
            }
        })

        return res.status(200).json({
            msg: "Event created successfully",
        })
    } catch(e){
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

export const getAllActiveEvents = async (req: Request, res: Response)=>{
    try{

        const events = await prisma.event.findMany({
            where:{
                endDateTime: {
                    gt: new Date(),
                }
            }
        });

        return res.status(200).json({
            msg: "events fetched",
            events,
        })
    } catch(e){
        res.status(500).json({
            msg: "something went wrong!!",
            error: e,
        })
    }
}