import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { findTeacharByEmail, createNewTeacher } from "../repositories/teacherRepository.js";
import { teacherType } from "../repositories/teacherRepository.js";

export async function registerNewTeacher(teacher: teacherType) {
    const teacherData = await findTeacharByEmail(teacher.email);

    if (teacherData) {
        throw {
            response: {
                message: "This email aready exist",
                status: 409
            }
        }
    }

    const cryptPassword = await bcrypt.hash(teacher.password, 10);

    delete teacher.password;

    await createNewTeacher( {...teacher, password: cryptPassword});
};