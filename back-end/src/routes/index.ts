import Router from "express";
import teacherRouter from "./teacherRouter.js";

const router = Router();

router.use(teacherRouter);

export default router;