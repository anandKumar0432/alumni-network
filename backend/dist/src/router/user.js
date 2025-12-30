import express, { Router } from 'express';
import { auth } from '../middleware/authMiddleware.js';
import { isVerified } from '../middleware/isVerifiedMiddleware.js';
import { requiredRole } from '../middleware/requiredRole.js';
import { findUser } from '../controller/userController.js';
const router = express.Router();
router.use(auth);
router.use(isVerified);
router.use(requiredRole("STUDENT"));
// /me
router.get("/me/:id", findUser);
// /update-profile
// /all-student
// /all-alumni
// /update-password
export default router;
