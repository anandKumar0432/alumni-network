import express , {Router} from "express";
import {signup, login, logout, verifyEmail} from "../controller/authController.js"
import { uploadImage } from "../controller/userController.js";
import { auth } from "../middleware/authMiddleware.js";
import { getMe } from "../controller/authController.js";

const router : Router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/verify-email", verifyEmail);

router.get("/me", auth, getMe);

export default router;