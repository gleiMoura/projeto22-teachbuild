import Router from "express";
import requestValidator from "../middlewares/requestValidator.js";
import requestSchema from "../schemas/requestSchema.js";
import { createRequests, getTeacherRequest } from "../controllers/requestController.js";

const requestRouter = Router();

requestRouter.post("/request", requestValidator(requestSchema), createRequests);
requestRouter.get("/request/:teacherId", getTeacherRequest);
/* requestRouter.get("/request/:studentId", getStudentRequest);
requestRouter.patch("/request", updateRequest); */

export default requestRouter;