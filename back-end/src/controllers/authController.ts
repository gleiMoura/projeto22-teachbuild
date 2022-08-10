import { Request, Response } from "express";
import { registerNewTeacher, registerNewStudent, authorizelogin } from "../services/authService.js";

export async function createTeacher(req: Request, res: Response) {
    const teacher = req.body;

    await registerNewTeacher( teacher );

    res.sendStatus(201);
};

export async function createStudent(req: Request, res: Response) {
    const student = req.body;

    await registerNewStudent( student );

    res.sendStatus(201);
};

export async function doSignin(req: Request, res: Response) {
    const user = req.body;

    const token = await authorizelogin(user);

    res.status(200).send(token)
}