import { Request, Response } from "express";

export async function createTeacher(req: Request, res: Response) {
    const teacher = req.body;

    await registerNewTeacher( teacher );

    res.sendStatus(201);
};