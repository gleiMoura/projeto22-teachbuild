import { teachers } from "@prisma/client";
import prisma from "../config/database.js";

export type teacherType = Omit<teachers, 'id' | 'likes' | 'wallet'>;

export async function findTeacharByEmail( email: string ) {
    const data = await prisma.teachers.findUnique({
        where:{
            email
        }
    });

    return data
};

export async function createNewTeacher(teacher: teacherType) {
    const data = await prisma.teachers.create({
        data: teacher
    });

    return data
};
