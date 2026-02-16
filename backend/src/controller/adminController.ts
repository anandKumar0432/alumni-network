import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { safeUserSelect } from "../lib/selectors/userSelector.js";
import { signupSchema } from "../types/zodSchema.js";
import bcrypt from "bcrypt";
import { Status, Role } from "../../generated/prisma/enums.js";
import { Prisma } from "../../generated/prisma/client.js";

// const verifyUserParamsSchema = z.object({
//   id: z.string().uuid(),
// });

type status = "PENDING" | "REJECTED" | "VERIFIED";

export const updateUserStatus = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const status: status = req.body.status;
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
    let oldStatus: status = "PENDING";
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
  } catch (e) {
    return res.status(500).json({
      msg: "verification failed",
    });
  }
};

export const unverifiedUser = async (req: Request, res: Response) => {
  try {
    const {
      search = "",
      branch = "",
      role = "",
      session = "",
      page = "1",
      limit = "10",
    } = req.query;

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

    const andFilters: Prisma.UserWhereInput[] = [];

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
      andFilters.push({ role: role as Role });
    }

    // branch
    if (branch) {
      andFilters.push({ branch: String(branch) });
    }

    // session
    if (session) {
      andFilters.push({ session: String(session) });
    }

    const whereCondition: Prisma.UserWhereInput = {
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
  } catch (e) {
    console.error("unverifiedUser error:", e);
    return res.status(500).json({
      msg: "something went wrong",
    });
  }
};

export const changRole = async (req: Request, res: Response) => {
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
              currentYear:
                existingUser.student?.currentYear ||
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
  } catch (e) {
    return res.status(500).json({
      msg: "something went wrong",
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
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
  } catch (e) {
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

export const bulkVerifyUsers = async (req: Request, res: Response) => {
  try {
    const { userIds, action } = req.body;

    if (!Array.isArray(userIds) || userIds.length === 0) {
      return res.status(400).json({ msg: "No users selected" });
    }

    if (!["APPROVE", "REJECT"].includes(action)) {
      return res.status(400).json({ msg: "Invalid action" });
    }

    const newStatus = action === "APPROVE" ? Status.VERIFIED : Status.REJECTED;

    // fetch users with real state
    const users = await prisma.user.findMany({
      where: { id: { in: userIds } },
      include: {
        student: true,
        alumni: true,
      },
    });

    await prisma.$transaction(async (tx) => {
      for (const user of users) {
        let oldStatus: Status = Status.PENDING;

        if (user.role === "STUDENT") {
          oldStatus = user.student?.status ?? Status.PENDING;

          await tx.student.update({
            where: { userId: user.id },
            data: { status: newStatus },
          });
        }

        if (user.role === "ALUMNI") {
          oldStatus = user.alumni?.status ?? Status.PENDING;

          await tx.alumni.update({
            where: { userId: user.id },
            data: { status: newStatus },
          });
        }

        // audit log
        // audit log
        await tx.approvalLog.create({
          data: {
            targetType: user.role,
            targetId: user.id,
            oldStatus,
            newStatus,
            actionById: req.user.id,
          },
        });
      }
    });

    return res.json({
      msg: `Bulk ${action.toLowerCase()} successful`,
      count: users.length,
    });
  } catch (error) {
    console.error("bulkVerifyUsers error:", error);
    return res.status(500).json({ msg: "Bulk operation failed" });
  }
};

export const getAllVerifiedStudents = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 8;
    const skip = (page - 1) * limit;

    const search = (req.query.search as string) || "";
    const branch = (req.query.branch as string) || "";
    const session = (req.query.session as string) || "";
    const sort = (req.query.sort as string) || "newest";

    const where: Prisma.UserWhereInput = {
      role: Role.STUDENT,
      isActive: true,
      student: { is: { status: Status.VERIFIED } },

      ...(branch && { branch }),
      ...(session && { session }),

      ...(search && {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
          { regNo: { contains: search, mode: "insensitive" } },
        ],
      }),
    };

    let orderBy: any = { createdAt: "desc" };
    if (sort === "name") orderBy = { name: "asc" };

    const [students, filteredCount] = await Promise.all([
      prisma.user.findMany({
        where,
        include: { student: true },
        orderBy,
        skip,
        take: limit,
      }),

      prisma.user.count({ where }),
    ]);

    return res.status(200).json({
      msg: "Students fetched",
      students,
      totalPages: Math.ceil(filteredCount / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("getAllVerifiedStudents error:", error);
    return res.status(500).json({ msg: "Failed to fetch students" });
  }
};
