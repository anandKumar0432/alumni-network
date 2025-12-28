import express , {Router} from "express";
import userRouter from "./user.js"
import aluminiRouter from "./alumini.js"
import adminRouter from "./admin.js"

const router: Router = express.Router();
router.use("/user", userRouter);
router.use("/alumini", aluminiRouter);
router.use("/admin", adminRouter);

export default router;