import express, {Router} from "express";
import { bulkVerifyUsers, changRole, deleteUser, unverifiedUser, updateUserStatus, getAllVerifiedStudents } from "../controller/adminController.js";
import { auth } from "../middleware/authMiddleware.js";
import { requiredRole } from "../middleware/requiredRole.js";
import { findAllAlumni, findAllStudent, findUser, updateUser } from "../controller/userController.js";
import { isActive } from "../middleware/isActiveMiddleware.js";
import { getApprovalLogs, getApprovalAdmins, getApprovalLogStats } from "../controller/adminLogController.js";

const router : Router = express.Router();
router.use(auth);
router.use(isActive);

// allow ADMIN + ALUMNI
router.get(
  "/students",
  requiredRole("ADMIN", "ALUMNI"),
  getAllVerifiedStudents
);

router.use(requiredRole("ADMIN"));

router.post("/update-status/:id", updateUserStatus);

router.get("/unverified/user", unverifiedUser);

router.get("/approval-logs", getApprovalLogs);

router.get("/approval-admins", getApprovalAdmins);

router.get("/logs/stats", getApprovalLogStats);

router.put("/change-role/:id", changRole);

router.get("/me/:id", findUser);

router.patch("/update", updateUser);

router.patch("/users/bulk-verify", bulkVerifyUsers);

router.get("/bulk/student",findAllStudent);

router.get("/bulk/alumni",findAllAlumni);

router.put("/delete", deleteUser);

export default router;