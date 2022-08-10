import Router from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import teacherSchema from "../schemas/teacherSchema.js";
import { createTeacher } from "../controllers/teacherController.js";

const teacherRouter = Router();

teacherRouter.post("/teacher/signup", schemaValidator(teacherSchema), createTeacher);

export default teacherRouter;

