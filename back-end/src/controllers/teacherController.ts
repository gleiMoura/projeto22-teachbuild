import { Request, Response } from "express";
import { registerNewTeacher } from "../services/teacherService.js";

export async function createTeacher(req: Request, res: Response) {
    const teacher = req.body;

    await registerNewTeacher( teacher );

    res.sendStatus(201);
};