import { teachers } from "@prisma/client";
import prisma from "../config/database.js";

export type createTeacherData = Omit<teachers,"id">;

export async function findTecharByEmail( email: string ) {
    const data = await prisma.teachers.findUnique({
        where:{
            email
        }
    });

    return data
};

export async function createNewTeacher(teacher: createTeacherData) {
    const data = await prisma.teachers.create({
        data: teacher
    });

    return data
}
