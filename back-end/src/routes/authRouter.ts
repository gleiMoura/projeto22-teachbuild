import Router from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import teacherSchema from "../schemas/teacherSchema.js";
import studentSchema from "../schemas/studentSchema.js";
import { createTeacher, createStudent, doSignin } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/teacher/signup", schemaValidator(teacherSchema), createTeacher);
authRouter.post("/student/signup", schemaValidator(studentSchema), createStudent);
authRouter.post("/signin", doSignin);

export default authRouter;

