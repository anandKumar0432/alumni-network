import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function adminAuth(req: Request, res: Response, next: NextFunction) {
  const token =
    req.cookies?.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;

    if (decoded.role !== "ADMIN") {
      return res.status(403).json({ msg: "Access denied. Admins only." });
    }

    (req as any).admin = decoded; // attach admin info to request
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
}
