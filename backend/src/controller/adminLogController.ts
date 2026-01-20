import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { Prisma, Status } from "../../generated/prisma/client.js";
// import { Status } from "@prisma/client";

export const getApprovalAdmins = async (req: Request, res: Response) => {
  try {
    const admins = await prisma.approvalLog.findMany({
      distinct: ["actionById"],
      select: {
        actionBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      where: {
        actionById: { not: null },
      },
    });

    // clean nulls and flatten
    const result = admins
      .map((a) => a.actionBy)
      .filter(Boolean);

    return res.json({ data: result });
  } catch (e) {
    console.error("getApprovalAdmins error:", e);
    return res.status(500).json({ msg: "Failed to fetch admins" });
  }
};


export const getApprovalLogs = async (req: Request, res: Response) => {
  try {
    const {
      page = "1",
      limit = "10",
      status = "",
      actionBy = "",
      targetType = "",
    } = req.query;

    const pageNumber = Number(page) || 1;
    const pageSize = Number(limit) || 10;
    const skip = (pageNumber - 1) * pageSize;

    const where: Prisma.ApprovalLogWhereInput = {};

    if (status) {
      where.newStatus = status as any;
    }

    if (targetType) {
      where.targetType = targetType as any;
    }

    if (actionBy) {
      where.actionById = String(actionBy);
    }

    const [logs, total] = await Promise.all([
      prisma.approvalLog.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: pageSize,
        include: {
          actionBy: {
            select: { id: true, name: true, email: true },
          },
        },
      }),
      prisma.approvalLog.count({ where }),
    ]);

    res.json({
      data: logs,
      total,
      totalPages: Math.ceil(total / pageSize),
      currentPage: pageNumber,
    });
  } catch (error) {
    console.error("getApprovalLogs error:", error);
    return res.status(500).json({ msg: "Failed to fetch logs" });
  }
};

export const getApprovalLogStats = async (req: Request, res: Response) => {
  try {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const [
      totalLogs,
      todayLogs,
      approvedCount,
      rejectedCount,
      // pendingUsers,
    ] = await Promise.all([
      // total logs
      prisma.approvalLog.count(),

      // today logs
      prisma.approvalLog.count({
        where: { createdAt: { gte: todayStart } },
      }),

      // approved (PENDING -> VERIFIED)
      prisma.approvalLog.count({
        where: { newStatus: Status.VERIFIED },
      }),

      // rejected
      prisma.approvalLog.count({
        where: { newStatus: Status.REJECTED },
      }),

      // users still pending
      // prisma.user.count({
      //   where: { emailVerified: false },
      // }),
    ]);

    return res.json({
      totalLogs,
      todayLogs,
      approvedCount,
      rejectedCount,
      // pendingUsers,
    });
  } catch (err) {
    console.error("Stats error:", err);
    return res.status(500).json({ message: "Failed to fetch stats" });
  }
};
