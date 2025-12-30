import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { Role } from "../../generated/prisma/enums.js";

const JWT_SECRET = process.env.JWT_SECRET || "mysecret";

export const auth = (req: Request, res: Response, next: NextFunction) => {
    console.log(JWT_SECRET);
    console.log(req.cookies.token);
    try{
        if(!JWT_SECRET){
            return res.status(500).json({
                msg: "Server configuration error"
            })
        }
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                msg : "Authentication required",
            })
        }
        const decoded = jwt.verify(token,JWT_SECRET) as { id: string; role: Role };
        req.user = {
            id: decoded.id,
            role: decoded.role
        }
        next();
    }catch(e){
        return res.status(400).json({
            msg: "user not logged In"
        })
    }
}