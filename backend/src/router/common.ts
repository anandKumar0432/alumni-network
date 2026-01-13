
import express, { Router } from "express"
import { findAllAlumni } from "../controller/userController.js";

const router: Router = express.Router();

router.get("/alumnis", findAllAlumni); // permits to all without signup or signin

export default router;
