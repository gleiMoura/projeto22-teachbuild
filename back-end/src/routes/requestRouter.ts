import Router from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import requestSchema from "../schemas/requestSchema.js";
import { createRequest } from "../controllers/requestController.js";

const requestRouter = Router();

requestRouter.post("/request", schemaValidator(requestSchema), createRequest);
/* requestRouter.get("/request/:studentId", getStudentRequest);
requestRouter.get("/request/teacherId", getTeacherRequest);
requestRouter.patch("/request", updateRequest); */

export default requestRouter;