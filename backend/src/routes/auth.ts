import express , {Router} from "express";
import {signup, login, logout, verifyEmail, getMe} from "../controller/authController.js"
import { auth } from "../middleware/authMiddleware.js";
import { findUser, uploadImage } from "../controller/userController.js";
import { upload } from "../middleware/upload.js";
import { uploadErrorHandler } from "../middleware/uploadErrorHandles.js";

const router : Router = express.Router();

router.post(
    "/upload",
    upload.single("image"),
    uploadErrorHandler,
);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/verify-email", verifyEmail);

router.get("/me", auth, getMe);

router.get("/profile/:id",auth, findUser);

export default router;