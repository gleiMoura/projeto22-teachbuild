import Router from "express";
import { getTeachers } from "../controllers/teachersController.js";

const teacherRouter = Router();

teacherRouter.get("/teachers", getTeachers);

export default teacherRouter;