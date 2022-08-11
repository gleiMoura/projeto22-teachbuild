import { faker } from "@faker-js/faker";
import prisma from "../../src/config/database.js";
import { teacherType, studentType} from "../../src/repositories/authRepository.js";

async function deleteAllData() {
    await prisma.$transaction([
        prisma.$executeRaw`ALTER SEQUENCE teachers_id_seq RESTART WITH 1`,
        prisma.$executeRaw`ALTER SEQUENCE disciplines_id_seq RESTART WITH 1`,
        prisma.$executeRaw`ALTER SEQUENCE mbti_id_seq RESTART WITH 1`,

    ]);

    await prisma.$transaction([
        prisma.$executeRaw`TRUNCATE TABLE teachers`,
        prisma.$executeRaw`TRUNCATE TABLE disciplines CASCADE`,
        prisma.$executeRaw`TRUNCATE TABLE mbti CASCADE`

    ]);
};

function createTeacher() {
    const teacherData: teacherType =
    {
        name: faker.name.firstName(),
        image: faker.internet.url(),
        text: faker.commerce.department(),
        mbtiId: randomNumber(1, 16),
        disciplineId: randomNumber(1, 5),
        password: faker.internet.password(),
        email: faker.internet.email()
    };

    return teacherData;
};

async function createStudent() {

    const studentData: studentType =
    {
        name: faker.name.firstName(),
        image: faker.internet.url(),
        text: faker.commerce.department(),
        mbtiId: randomNumber(1, 16),
        password: faker.internet.password(),
        email: faker.internet.email()
    };

    return studentData;
};

function randomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
};

const teacherFactory = {
    createTeacher,
    createStudent,
    deleteAllData
};

export default teacherFactory;