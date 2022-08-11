import { students, teachers } from "@prisma/client";
import prisma from "../config/database.js";

export type teacherType = Omit<teachers, 'id' | 'likes' | 'wallet'>;
export type studentType = Omit<students, 'id'>;

export interface SigninType {
    type: string,
    email: string,
    password: string,
}

async function findByEmail(email: string, type: string) {
    let data = null;
    if (type === 'teacher') {
        data = await prisma.teachers.findUnique({
            where: {
                email
            }
        });
    } else {
        data = await prisma.students.findUnique({
            where: {
                email
            }
        });
    }

    return data
};

async function createNewTeacher(teacher: teacherType) {
    const data = await prisma.teachers.create({
        data: teacher
    });

    return data
};

async function createNewStudent(student: studentType) {
    const data = await prisma.students.create({
        data: student
    });

    return data
};

async function createNewSession(token: string, userId: number) {
    const session = await prisma.sessions.create({
        data: { token, userId }
    });

    return session
}

const authRepository = {
    findByEmail,
    createNewTeacher,
    createNewStudent,
    createNewSession
};

export default authRepository;
