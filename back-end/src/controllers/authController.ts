import { Request, Response } from "express";
import { registerNewTeacher } from "../services/teacherService.js";

export async function createTeacher(req: Request, res: Response) {
    const teacher = req.body;

    await registerNewTeacher( teacher );

    res.sendStatus(201);
};

export async function createStudent(req: Request, res: Response) {
    const student = req.body;

    await registerNewStudent( student );

    res.sendStatus(201);
}