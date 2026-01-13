import express , {Router} from "express";
import userRouter from "./user.js"
import aluminiRouter from "./alumni.js"
import adminRouter from "./admin.js"
import authRouter from "./auth.js"
import commonRouter from "./common.js"

const router: Router = express.Router();

router.use("/auth",authRouter);
router.use("/user", userRouter);
router.use("/alumini", aluminiRouter);
router.use("/admin", adminRouter);
router.use("/common",commonRouter);

export default router;