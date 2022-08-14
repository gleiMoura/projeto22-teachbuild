import Router from "express";
import authRouter from "./authRouter.js";
import teacherRouter from "./teacherRouter.js";

const router = Router();

router.use(authRouter);
router.use(teacherRouter);

export default router;