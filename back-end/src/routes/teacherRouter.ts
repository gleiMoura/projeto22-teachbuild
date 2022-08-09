import Router from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import teacherSchema from "../schemas/teacherSchema.js";

const teacherRouter = Router();

teacherRouter.post("/teacher/signup", schemaValidator(teacherSchema), createTeacher);

export default teacherRouter;

