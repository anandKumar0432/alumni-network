import express, {Router} from 'express';
import { auth } from '../middleware/authMiddleware.js';
import { isVerified } from '../middleware/isVerifiedMiddleware.js';
import { requiredRole } from '../middleware/requiredRole.js';
import { findAllAlumni, findAllStudent, findUser, updateUser } from '../controller/userController.js';

const router : Router = express.Router();
router.use(auth);
router.use(isVerified);
router.use(requiredRole("STUDENT"));

// /me
router.get("/me/:id", findUser);

// /update-profile
router.patch("/update",updateUser);

// /all-student
router.get("/bulk/student", findAllStudent);

// /all-alumni
router.get("/bulk/alumni", findAllAlumni);

export default router;