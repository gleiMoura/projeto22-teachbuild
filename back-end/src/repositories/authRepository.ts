import { students, teachers } from "@prisma/client";
import prisma from "../config/database.js";

export type teacherType = Omit<teachers, 'id' | 'likes' | 'wallet'>;
export type studentType = Omit<students, 'id'>;

async function findByEmail( email: string ) {
    const data = await prisma.teachers.findUnique({
        where:{
            email
        }
    });

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

const authRepository = {
    findByEmail,
    createNewTeacher,
    createNewStudent
};

export default authRepository;
