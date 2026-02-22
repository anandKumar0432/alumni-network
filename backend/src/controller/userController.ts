import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { safeUserSelect } from "../lib/selectors/userSelector.js";
import { userUpdateShema } from "../types/zodSchema.js";
import bcrypt from "bcrypt";

export const uploadImage = async (req: Request, res: Response)=>{
        console.log(req.user.id);
        console.log(req.file);
        if(!req.file){
            return res.status(400).json({ message: "No image uploaded" });
        }

        const imageUrl = req.file.path;      // Cloudinary URL
        const publicId = req.file.filename;  // cloudinary public Id

        try{
            const userId = req.user.id

            await prisma.user.update({
                where: {
                    id: userId,
                }, 
                data : {
                    imageUrl,
                    imageId: publicId,
                }
            })

            return res.status(200).json({
                msg: "Profile image uploaded successfully",
                imageUrl,
            })
        } catch(e){
            return res.status(500).json({
                msg: "something went wrong!"
            })
        }
}

export const findUser = async (req: Request, res: Response)=>{
    try{
        const userId = req.params.id;
        const user = await prisma.user.findUnique({
            where:{
                id: userId
            },
            select:{
                ...safeUserSelect,
            }
        })
        if(!user){
            return res.status(404).json({
                msg: "user not found"
            })
        }
        return res.status(200).json({
            msg: "data fetched successfully",
            user,
        })
    }catch(e){
        return res.status(500).json({
            msg: "something went wrong"
        })
    }
}

export const findAllStudent = async (req: Request, res: Response)=>{
    try{
        const students = await prisma.user.findMany({
            where:{
                role:"STUDENT",
                student:{
                    status: "VERIFIED"
                }
            },
            select:{
                ...safeUserSelect
            }
        });
        if(!students){
            return res.status(404).json({
                msg: "students not found"
            })
        }
        return res.status(200).json({
            msg: "students are found",
            students,
        })
    }catch(e){
        return res.status(500).json({
            msg: "something went wrong",
        })
    }
}

export const findAllAlumni = async (req: Request, res: Response) => {
  try {
    const { search, branch, session, year, page = "1", limit = "8" } = req.query;

    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;

    const filters: any = {
      role: "ALUMNI",
      alumni: { status: "VERIFIED" },
      AND: [
        search
          ? {
              name: {
                contains: String(search),
                mode: "insensitive",
              },
            }
          : {},

        branch ? { branch: String(branch) } : {},
        session ? { session: String(session) } : {},

        year
          ? {
              session: {
                contains: String(year),
              },
            }
          : {},
      ],
    };

    const [alumnis, total] = await Promise.all([
      prisma.user.findMany({
        where: filters,
        skip,
        take: limitNumber,
        select: {
          ...safeUserSelect,
        },
      }),

      prisma.user.count({
        where: filters,
      }),
    ]);

    return res.status(200).json({
      msg: "alumni fetched successfully",
      data: alumnis,
      pagination: {
        page: pageNumber,
        limit: limitNumber,
        total,
        totalPages: Math.ceil(total / limitNumber),
      },
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      msg: "something went wrong",
    });
  }
};



export const updateUser = async (req: Request, res: Response)=>{
    try{
        const userId = req.user.id;
        const parsed = userUpdateShema.safeParse(req.body);
        if(!parsed.success){
            return res.status(400).json({
                msg: "Invalid Input",
            })
        }
        if(!userId){
            return res.status(400).json({
                msg : "please provide user Id"
            })
        }
        const existingUser = prisma.user.findUnique({
            where: {
                id : userId,
            }
        })
        if(!existingUser){
            return res.status(400).json({
                msg: "user not found"
            })
        }
        const data = parsed.data;
        const hashPassword = data.password ? await bcrypt.hash(data.password, 10) : undefined;
        const user = await prisma.user.update({
            where: {
                id : userId
            },
            data: {
                password : hashPassword,
                name: data.name,
                regNo: data.regNo,
                branch: data.branch,
                session: data.session,
                student:
                data.role === "STUDENT"
                ? {
                    upsert:{
                        update: {
                            ...(data.student.currentYear !== undefined && { currentYear: data.student.currentYear }),
                            ...(data.student.interest !== undefined && { interest: data.student.interest }),
                        },
                        create: {
                            currentYear: data.student.currentYear || "",
                            ...(data.student.interest !== undefined && { interest: data.student.interest }),
                        }
                    }
                }
                : undefined,
                alumni:
                data.role === "ALUMNI"
                ? {
                    upsert: {
                        update : {
                            linkedIn: data.alumni.linkedIn,
                            instagram: data.alumni.instagram,
                            portfolio: data.alumni.portfolio,
                        },
                        create : {
                            linkedIn: data.alumni.linkedIn,
                            instagram: data.alumni.instagram,
                            portfolio: data.alumni.portfolio,
                        }
                    }
                }
                : undefined
            }
        })
        return res.status(200).json({
            msg: "user updated successfully"
        })
    } catch(e){
        return res.status(500).json({
            msg: "something went wrong!"
        })
    }
}