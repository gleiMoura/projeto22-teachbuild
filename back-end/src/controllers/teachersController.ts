import { Request, Response } from "express";
import verifyToken from "../utils/tokenValidate.js";
import { findTeachers } from "../repositories/teachersRepository.js";

export async function getTeachers(req: Request, res: Response) {
    const { authorization } = req.headers;

    verifyToken(authorization);

    const teachers = await findTeachers()

    res.status(200).send(teachers);
}