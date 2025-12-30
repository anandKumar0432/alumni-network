import type { NextFunction, Request, Response } from "express";
import type { Role } from "../../generated/prisma/enums.js";
export declare const requiredRole: (...allowedRoles: Role[]) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=requiredRole.d.ts.map