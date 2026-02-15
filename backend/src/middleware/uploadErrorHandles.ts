
import type { Request , Response, NextFunction } from "express";
import multer from "multer";

export function uploadErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof multer.MulterError) {
    console.log("error 1")
    return res.status(400).json({
      message: err.message,
    });
  }

  if (err) {
    console.log("err 2")
    return res.status(400).json({
      message: err.message || "Image upload failed",
    });
  }

  next();
}
