import express , {Router} from "express";
import { findAllStudent, findUser, updateUser } from "../controller/userController.js";
import { auth } from "../middleware/authMiddleware.js";
import { isVerified } from "../middleware/isVerifiedMiddleware.js";
import { isActive } from "../middleware/isActiveMiddleware.js";

const router : Router = express.Router();
router.use(auth);
router.use(isActive);
router.use(isVerified); // if admin change the status
//router.use(requiredRole("ALUMNI"))  //I am chaning it to allow students, aluinis and admin to see all the listed aluminis

router.get("/me/:id", findUser);

router.patch("/update", updateUser);

router.get("/students", findAllStudent);

// /all-alumni
// router.get("/alumnis", findAllAlumni);
//correction



export default router;