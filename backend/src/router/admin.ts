import express, {Router} from "express";
import { verifyUser } from "../controller/adminController.js";

const router : Router = express.Router();

router.patch("/verify-user/:id", verifyUser)

export default router;