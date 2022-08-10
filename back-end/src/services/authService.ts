import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js"
import { teacherType, studentType } from "../repositories/authRepository.js";
import { SigninType } from "../schemas/signinSchema.js";

export type signType = Omit<SigninType, 'type'>;

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
};

export async function authorizelogin( user: signType ) {
    const userData = await authRepository.findByEmail( user.email );
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

    return {email: user.email, token}
};