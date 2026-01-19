import express, {Router} from "express";
import { changRole, deleteUser, unverifiedUser, updateUserStatus } from "../controller/adminController.js";
import { auth } from "../middleware/authMiddleware.js";
import { requiredRole } from "../middleware/requiredRole.js";
import { findAllAlumni, findAllStudent, findUser, updateUser } from "../controller/userController.js";
import { isActive } from "../middleware/isActiveMiddleware.js";
import { getApprovalLogs, getApprovalAdmins } from "../controller/adminLogController.js";

const router : Router = express.Router();
router.use(auth);
router.use(isActive);
router.use(requiredRole("ADMIN"));

// /verify-user , update status of user 
router.post("/update-status/:id", updateUserStatus);

// fetch user which is unverified
router.get("/unverified/user", unverifiedUser);

// to get approval-logs of approved or rejected users
router.get("/approval-logs", getApprovalLogs);

// to get which admin has approved or rejected the user request if there are more than one admin
router.get("/approval-admins", getApprovalAdmins);
   
//role changes
router.put("/change-role/:id", changRole);

// /me
router.get("/me/:id", findUser);

// /update
router.patch("/update", updateUser);

// /create-user
// router.post("/create-user", signup);

// find all student
router.get("/bulk/student",findAllStudent);

//find all alumni
router.get("/bulk/alumni",findAllAlumni);

// delete-student
router.put("/delete", deleteUser);

export default router;