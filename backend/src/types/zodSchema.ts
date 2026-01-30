import z from "zod";

export const baseSignupSchema = z.object({
    email : z.string().email(),
    password: z.string().min(6),
    name: z.string(),
    regNo: z.string(),
    branch: z.string(),
    session: z.string(),
})

export const studentSchema = z.object({
    role: z.literal("STUDENT"),
    student : z.object({
        currentYear: z.string(),
        interest: z.string().optional(),
    })
})

export const alumniSchema = z.object({
    role: z.literal("ALUMNI"),
    alumni: z.object({
        linkedIn: z.string().optional(),
        instagram: z.string().optional(),
        portfolio: z.string().optional(),
    })
})

export const signupSchema = z.discriminatedUnion("role", [
    z.object({
        ...baseSignupSchema.shape,
        ...studentSchema.shape,
    }),
    z.object({
        ...baseSignupSchema.shape,
        ...alumniSchema.shape,
    })
])

export const loginSchema = z.object({
    email : z.string().email(),
    password: z.string().min(6)
})

export const baseUpdateSchema = z.object({
    password: z.string().min(6).optional(),
    name: z.string().optional(),
    regNo: z.string().optional(),
    branch: z.string().optional(),
    session: z.string().optional(),
})

export const studentUpdateShema = z.object({
    role: z.literal("STUDENT"),
    student : z.object({
        currentYear: z.string().optional(),
        interest: z.string().optional(),
    })
})

export const alumniUpdateSchema = z.object({
    role: z.literal("ALUMNI"),
    alumni: z.object({
        currentJob: z.string().optional(),
        currentCompany:  z.string().optional(),
        linkedIn: z.string().optional(),
        instagram: z.string().optional(),
        portfolio: z.string().optional(),
    })
})

export const userUpdateShema = z.discriminatedUnion("role", [
    z.object({
        ...baseUpdateSchema.shape,
        ...studentUpdateShema.shape,
    }),
    z.object({
        ...baseUpdateSchema.shape,
        ...alumniUpdateSchema.shape,
    })
])