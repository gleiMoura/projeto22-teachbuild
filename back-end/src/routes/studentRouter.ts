import Router from "express";
import { getStudents } from "../controllers/studentController.js";

const studentRouter = Router();

studentRouter.get("/students", getStudents);

export default studentRouter; 