import { faker } from "@faker-js/faker";
import prisma from "../../src/config/database.js";

function createTeacher() {
    function randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    };

    const teacherData =
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
}

const teacherFactory = {
    createTeacher,
    deleteAllData
};

export default teacherFactory;