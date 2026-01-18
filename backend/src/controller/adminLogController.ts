import type { Prisma } from "@prisma/client/extension";
import { prisma } from "../lib/prisma.js";

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

    res.json({ data: result });
  } catch (e) {
    console.error("getApprovalAdmins error:", e);
    res.status(500).json({ msg: "Failed to fetch admins" });
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
    res.status(500).json({ msg: "Failed to fetch logs" });
  }
};
