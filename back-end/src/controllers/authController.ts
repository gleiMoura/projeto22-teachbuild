import { Request, Response } from "express";
import { registerNewTeacher, registerNewStudent, authorizelogin } from "../services/authService.js";

export async function createTeacher(req: Request, res: Response) {
    const teacher = req.body;

    const teacherData = await registerNewTeacher( teacher );

    delete(teacherData.password);

    res.status(201).send(teacherData);
};

export async function createStudent(req: Request, res: Response) {
    const student = req.body;

    const studentData = await registerNewStudent( student );

    delete(studentData.password);

    res.status(201).send(studentData);
};

export async function doSignin(req: Request, res: Response) {
    const user = req.body;

    const token = await authorizelogin(user);

    res.status(200).send(token)
}