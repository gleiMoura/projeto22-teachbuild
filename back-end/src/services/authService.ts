import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js"
import { teacherType, studentType } from "../repositories/authRepository.js";

export async function registerNewTeacher(teacher: teacherType) {
    const teacherData = await authRepository.findByEmail(teacher.email);

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

    await authRepository.createNewTeacher( {...teacher, password: cryptPassword});
};

export async function registerNewStudent(student: studentType) {
    const studentData = await authRepository.findByEmail(student.email);

    if (studentData) {
        throw {
            response: {
                message: "This email aready exist",
                status: 409
            }
        }
    }

    const cryptPassword = await bcrypt.hash(student.password, 10);

    delete student.password;

    await authRepository.createNewStudent( {...student, password: cryptPassword});
}