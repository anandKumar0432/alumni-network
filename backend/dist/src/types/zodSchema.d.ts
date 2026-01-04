import z from "zod";
export declare const baseSignupSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
    regNo: z.ZodString;
    branch: z.ZodString;
    session: z.ZodString;
}, z.z.core.$strip>;
export declare const studentSchema: z.ZodObject<{
    role: z.ZodLiteral<"STUDENT">;
    student: z.ZodObject<{
        currentYear: z.ZodString;
        interest: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const alumniSchema: z.ZodObject<{
    role: z.ZodLiteral<"ALUMNI">;
    alumni: z.ZodObject<{
        currentJob: z.ZodOptional<z.ZodString>;
        currentCompany: z.ZodOptional<z.ZodString>;
        linkedIn: z.ZodOptional<z.ZodString>;
        instagram: z.ZodOptional<z.ZodString>;
        portfolio: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const signupSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    role: z.ZodLiteral<"STUDENT">;
    student: z.ZodObject<{
        currentYear: z.ZodString;
        interest: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
    regNo: z.ZodString;
    branch: z.ZodString;
    session: z.ZodString;
}, z.z.core.$strip>, z.ZodObject<{
    role: z.ZodLiteral<"ALUMNI">;
    alumni: z.ZodObject<{
        currentJob: z.ZodOptional<z.ZodString>;
        currentCompany: z.ZodOptional<z.ZodString>;
        linkedIn: z.ZodOptional<z.ZodString>;
        instagram: z.ZodOptional<z.ZodString>;
        portfolio: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
    regNo: z.ZodString;
    branch: z.ZodString;
    session: z.ZodString;
}, z.z.core.$strip>], "role">;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.z.core.$strip>;
export declare const baseUpdateSchema: z.ZodObject<{
    password: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    regNo: z.ZodOptional<z.ZodString>;
    branch: z.ZodOptional<z.ZodString>;
    session: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export declare const studentUpdateShema: z.ZodObject<{
    role: z.ZodLiteral<"STUDENT">;
    student: z.ZodObject<{
        currentYear: z.ZodOptional<z.ZodString>;
        interest: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const alumniUpdateSchema: z.ZodObject<{
    role: z.ZodLiteral<"ALUMNI">;
    alumni: z.ZodObject<{
        currentJob: z.ZodOptional<z.ZodString>;
        currentCompany: z.ZodOptional<z.ZodString>;
        linkedIn: z.ZodOptional<z.ZodString>;
        instagram: z.ZodOptional<z.ZodString>;
        portfolio: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const userUpdateShema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    role: z.ZodLiteral<"STUDENT">;
    student: z.ZodObject<{
        currentYear: z.ZodOptional<z.ZodString>;
        interest: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
    password: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    regNo: z.ZodOptional<z.ZodString>;
    branch: z.ZodOptional<z.ZodString>;
    session: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>, z.ZodObject<{
    role: z.ZodLiteral<"ALUMNI">;
    alumni: z.ZodObject<{
        currentJob: z.ZodOptional<z.ZodString>;
        currentCompany: z.ZodOptional<z.ZodString>;
        linkedIn: z.ZodOptional<z.ZodString>;
        instagram: z.ZodOptional<z.ZodString>;
        portfolio: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
    password: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    regNo: z.ZodOptional<z.ZodString>;
    branch: z.ZodOptional<z.ZodString>;
    session: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>], "role">;
//# sourceMappingURL=zodSchema.d.ts.map