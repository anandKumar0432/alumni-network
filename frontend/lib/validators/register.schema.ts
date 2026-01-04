import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  regNo: z.string().min(1),
  branch: z.enum(["CSE", "ME", "CIVIL", "EEE", "VLSI"]),
  session: z.string().min(1),
  role: z.enum(["STUDENT", "ALUMNI"]),

  student: z
    .object({
      currentYear: z.string().min(1),
      interest: z.string().optional(),
    })
    .optional(),

  alumni: z
    .object({
      currentJob: z.string().optional(),
      currentCompany: z.string().optional(),
      linkedIn: z.string().url().optional(),
      instagram: z.string().url().optional(),
      portfolio: z.string().url().optional(),
    })
    .optional(),
});
