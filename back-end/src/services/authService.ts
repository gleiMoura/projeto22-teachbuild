import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js"
import { teacherType, studentType } from "../repositories/authRepository.js";
import { SigninType } from "../repositories/authRepository.js";

export async function registerNewTeacher(teacher: teacherType) {
    const teacherData = await authRepository.findByEmail(teacher.email, 'teacher');

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

    const data = await authRepository.createNewTeacher( {...teacher, password: cryptPassword});

    return data
};

export async function registerNewStudent(student: studentType) {
    const studentData = await authRepository.findByEmail(student.email, 'student');

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

    const data = await authRepository.createNewStudent( {...student, password: cryptPassword});

    return data
};

export async function authorizelogin( user: SigninType ) {
    const userData = await authRepository.findByEmail( user.email, user.type );
    if( !userData ) {
        throw {
            response: {
                message: "There is not a user with this email in database!!!",
                status: 404
            }
        }
    };

    const { password } = userData; 
    const passwordBoolean: boolean = bcrypt.compareSync(user.password, password);
    if( !passwordBoolean ) {
        throw {
            response: {
                message: "Password is not valid",
                status: 401
            }
        }
    };

    const token = jwt.sign({ userId: userData.id }, process.env.SECRET, {expiresIn: 36000});

    await authRepository.createNewSession(token, userData.id);

    return {email: user.email, token}
};