import { Request, Response } from "express";
import verifyToken from "../utils/tokenValidate.js";
import { findStudents } from "../repositories/studentsRepository.js";

export async function getStudents(req: Request, res: Response) {
    const { authorization } = req.headers;

    verifyToken(authorization);

    const students = await findStudents()

    res.status(200).send(students);
}