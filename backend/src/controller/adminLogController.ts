import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { Prisma, Status } from "../../generated/prisma/client.js";
import ExcelJS from "exceljs";

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
    ] = await Promise.all([

      prisma.approvalLog.count(),

      prisma.approvalLog.count({
        where: { createdAt: { gte: todayStart } },
      }),

      prisma.approvalLog.count({
        where: { newStatus: Status.VERIFIED },
      }),

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
    });
  } catch (err) {
    console.error("Stats error:", err);
    return res.status(500).json({ message: "Failed to fetch stats" });
  }
};

export const exportUsers = async (req: Request, res: Response) => {
  try {
    const { branch, year } = req.query;

    const studentFilter: any = {
      user: {
        isActive: true,
      },
    };

    if (branch) {
      studentFilter.user.branch = branch;
    }

    if (year) {
      studentFilter.currentYear = year;
    }

    const students = await prisma.student.findMany({
      where: studentFilter,
      include: {
        user: true,
      },
    });

    const alumni = await prisma.alumni.findMany({
      where: studentFilter,
      include: {
        user: true,
        job: {
          orderBy: { startDate: "desc" },
        },
      },
    });

    const workbook = new ExcelJS.Workbook();

    const studentSheet = workbook.addWorksheet("Students");

    studentSheet.columns = [
      { header: "Name", key: "name", width: 20 },
      { header: "Email", key: "email", width: 25 },
      { header: "Reg No", key: "regNo", width: 15 },
      { header: "Branch", key: "branch", width: 15 },
      { header: "Session", key: "session", width: 15 },
      { header: "Current Year", key: "currentYear", width: 15 },
      { header: "Interest", key: "interest", width: 25 },
      { header: "Status", key: "status", width: 15 },
      { header: "Phone", key: "phone", width: 15 },
    ];

    students.forEach((s) => {
      studentSheet.addRow({
        name: s.user.name,
        email: s.user.email,
        regNo: s.user.regNo,
        branch: s.user.branch,
        session: s.user.session,
        currentYear: s.currentYear,
        interest: s.interest,
        status: s.status,
        phone: s.user.phone,
      });
    });

    const alumniSheet = workbook.addWorksheet("Alumni");

    alumniSheet.columns = [
      { header: "Name", key: "name", width: 20 },
      { header: "Email", key: "email", width: 25 },
      { header: "Reg No", key: "regNo", width: 15 },
      { header: "Branch", key: "branch", width: 15 },
      { header: "Session", key: "session", width: 15 },
      { header: "Company", key: "company", width: 20 },
      { header: "Role", key: "role", width: 20 },
      { header: "Experience", key: "experience", width: 20 },
      { header: "LinkedIn", key: "linkedIn", width: 30 },
      { header: "Status", key: "status", width: 15 },
      { header: "Phone", key: "phone", width: 15 },
    ];

    alumni.forEach((a) => {
      const latestJob = a.job[0];

      let experience = "";
      if (latestJob?.startDate) {
        const end = latestJob.isCurrent ? new Date() : latestJob.endDate;
        if (end) {
          const years =
            (new Date(end).getTime() - new Date(latestJob.startDate).getTime()) /
            (1000 * 60 * 60 * 24 * 365);
          experience = years.toFixed(1) + " yrs";
        }
      }

      alumniSheet.addRow({
        name: a.user.name,
        email: a.user.email,
        regNo: a.user.regNo,
        branch: a.user.branch,
        session: a.user.session,
        company: latestJob?.company || "",
        role: latestJob?.role || "",
        experience,
        linkedIn: a.linkedIn,
        status: a.status,
        phone: a.user.phone,
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=filtered-users.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Export failed" });
  }
};
