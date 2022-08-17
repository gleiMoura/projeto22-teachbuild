import Router from "express";
import { createRequests, getTeacherRequest } from "../controllers/requestController.js";

const requestRouter = Router();

requestRouter.post("/request", createRequests);
requestRouter.get("/request/:teacherId", getTeacherRequest);
/* requestRouter.get("/request/:studentId", getStudentRequest);
requestRouter.patch("/request", updateRequest); */

export default requestRouter;