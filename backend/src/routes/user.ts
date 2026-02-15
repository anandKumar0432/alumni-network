import express, {Router} from 'express';
import { auth } from '../middleware/authMiddleware.js';
import { isVerified } from '../middleware/isVerifiedMiddleware.js';
import { requiredRole } from '../middleware/requiredRole.js';
import { findAllAlumni, findAllStudent, findUser, updateUser, uploadImage } from '../controller/userController.js';
import { isActive } from '../middleware/isActiveMiddleware.js';
import { getPlatformStats } from "../controller/stats.controller.js";
import { upload } from '../middleware/upload.js';
import { uploadErrorHandler } from '../middleware/uploadErrorHandles.js';

const router : Router = express.Router();
router.use(auth);
router.use(isActive);
router.use(isVerified);

//to get total count of users
router.get("/platform-stats", getPlatformStats);

router.post(
    "/upload-profile", 
    upload.single("image"),
    uploadErrorHandler,
    uploadImage, 
);


router.use(requiredRole("STUDENT"));
// /me
router.get("/me/:id", findUser);

// /update-profile
router.patch("/update",updateUser);

// /all-student
router.get("/students", findAllStudent);

// /all-alumni
router.get("/alumnis", findAllAlumni);

export default router;