import express , {Router} from "express";
import { findAllAlumni, findAllStudent, findUser, updateUser } from "../controller/userController.js";
import { auth } from "../middleware/authMiddleware.js";
import { isVerified } from "../middleware/isVerifiedMiddleware.js";
import { requiredRole } from "../middleware/requiredRole.js";

const router : Router = express.Router();
router.use(auth);
router.use(isVerified); // if admin change the status
router.use(requiredRole("ALUMNI"))

// /me
router.get("/me/:id", findUser);

// /update-profile
router.patch("/update", updateUser);

// /all-student
router.get("/bulk/student", findAllStudent);

// /all-alumni
router.get("/bulk/alumni", findAllAlumni);


export default router;