import express, {Router} from "express";
import { changRole, unverifiedUser, verifyUser } from "../controller/adminController.js";
import { auth } from "../middleware/authMiddleware.js";
import { requiredRole } from "../middleware/requiredRole.js";
import { findAllAlumni, findAllStudent, findUser, updateUser } from "../controller/userController.js";

const router : Router = express.Router();
router.use(auth);
router.use(requiredRole("ADMIN"));

// /verify-user
router.patch("/verify-user/:id", verifyUser);

// fetch user which is unverified
router.get("/unverified/user", unverifiedUser);
    
//role changes
router.put("/change-role/:id", changRole);

// /me
router.get("/me/:id", findUser);

// /update
router.patch("/update", updateUser);

// /create-user


// find all student
router.get("/bulk/student",findAllStudent);

//find all alumni
router.get("/bulk/alumni",findAllAlumni);

// delete-student


// delete-alumni


export default router;