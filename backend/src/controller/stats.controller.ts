import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const getPlatformStats = async (req: Request, res: Response) => {
  try {
    const totalStudents = await prisma.user.count({
      where: { role: "STUDENT", isActive: true },
    });

    const totalAlumni = await prisma.user.count({
      where: { role: "ALUMNI", isActive: true },
    });

    const totalVerified = await prisma.user.count({
      where: { isActive: true },
    });

    return res.json({
      totalStudents,
      totalAlumni,
      totalVerified,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Stats error" });
  }
};
