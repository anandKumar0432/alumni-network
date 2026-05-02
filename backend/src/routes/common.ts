
import express, { Router } from "express"
import { findAllAlumni } from "../controller/userController.js";
import { exportUsers } from "../controller/adminLogController.js";

const router: Router = express.Router();

router.get("/alumnis", findAllAlumni); // permits to all without signup or signin

router.get("/exports", exportUsers); // This must should be removed after testing

export default router;
