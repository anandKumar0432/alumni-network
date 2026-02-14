import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    regNo: z.string().min(10),
    branch: z.enum(["CSE", "ME", "CIVIL", "EEE", "VLSI"]),
    session: z.string().min(1),
    role: z.enum(["STUDENT", "ALUMNI"]),

    student: z
      .object({
        currentYear: z.string().optional(),
        interest: z.string().optional(),
      })
      .optional(),

    alumni: z
      .object({
        linkedIn: z.string().url().optional(),
        instagram: z.string().url().optional(),
        portfolio: z.string().url().optional(),
      })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.role === "STUDENT" && !data.student) {
      ctx.addIssue({
        path: ["student"],
        message: "Student details are required for STUDENT role",
        code: z.ZodIssueCode.custom,
      });
    }

    if (data.role === "ALUMNI" && !data.alumni) {
      ctx.addIssue({
        path: ["alumni"],
        message: "Alumni details are required for ALUMNI role",
        code: z.ZodIssueCode.custom,
      });
    }
  });
