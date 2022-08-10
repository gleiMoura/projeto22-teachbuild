import supertest from "supertest";
import app from "../../app.js";
import prisma from "../../src/config/database.js"
import teacherFactory from "../factories/teacherFactory.js";

beforeEach(async () => {
   await prisma.$executeRaw` TRUNCATE teachers CASCADE `;
});

describe("Teachers test - Integration", () => {
    it("Register a teacher", async () => {
        const teacher = teacherFactory.createTeacher();
        const response = await supertest(app).post("/teacher/signup").send(teacher);
        const status = response.status;

        console.log("response -->", response.body)
        console.log("response status --> ", response.status)
        console.log("teacher --> ", teacher)

        const findTeacherInDatabase = await prisma.teachers.findUnique({
            where: {
                email: teacher.email
            }
        });

        expect(teacher.email).toBe(findTeacherInDatabase.email);
        expect(status).toEqual(201);
    });
});

afterAll(async () => {
   await prisma.$disconnect();
})