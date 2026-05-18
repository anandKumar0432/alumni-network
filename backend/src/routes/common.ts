
import express, { Router } from "express"
import { findAllAlumni, findUser } from "../controller/userController.js";
import { exportUsers } from "../controller/adminLogController.js";
import { getAllActiveEvents } from "../controller/eventController.js";

const router: Router = express.Router();

router.get("/alumnis", findAllAlumni); // permits to all without signup or signin

router.get("/exports", exportUsers); // This must should be removed after testing

router.get("/profile/:id", findUser);

router.get("/events", getAllActiveEvents);

export default router;
