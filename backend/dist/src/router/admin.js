import express, { Router } from "express";
import { verifyUser } from "../controller/adminController.js";
import { auth } from "../middleware/authMiddleware.js";
import { requiredRole } from "../middleware/requiredRole.js";
import { findAllAlumni, findAllStudent } from "../controller/userController.js";
import { logout } from "../controller/authController.js";
const router = express.Router();
console.log("HII THERE");
router.use(auth);
router.use(requiredRole("ADMIN"));
// /verify-user
router.patch("/verify-user/:id", verifyUser);
// fetch user which is unverified
// /role = admin    //role changes
// /role = student
// /role = alumni
// /me
// /update-password
// /create-user
// /create-admin
// find all student
router.get("/bulk/student", findAllStudent);
//find all alumni
router.get("/bulk/alumni", findAllAlumni);
// logout
router.post("/logout", logout);
export default router;
