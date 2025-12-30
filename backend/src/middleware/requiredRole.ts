import type { NextFunction, Request, Response } from "express";
import type { Role } from "../../generated/prisma/enums.js";

export const requiredRole = 
    (...allowedRoles : Role[])=>
    (req: Request, res: Response, next: NextFunction)=>{
        if(!allowedRoles.includes(req.user.role)){
            res.status(403).json({
                msg : "Access denied"
            });
        }
        next();
    };