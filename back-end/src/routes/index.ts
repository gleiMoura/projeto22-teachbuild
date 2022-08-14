import Router from "express";
import authRouter from "./authRouter.js";
import teacherRouter from "./teacherRouter.js";
import studentRouter from "./studentRouter.js";

const router = Router();

router.use(authRouter);
router.use(teacherRouter);
router.use(studentRouter);

export default router;