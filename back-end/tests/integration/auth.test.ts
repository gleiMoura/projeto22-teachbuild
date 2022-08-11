import supertest from "supertest";
import bcrypt from "bcrypt";
import app from "../../app.js";
import prisma from "../../src/config/database.js"
import authFactory from "../factories/authFactory.js";

beforeEach(async () => {
   await prisma.$executeRaw` TRUNCATE teachers CASCADE `;
});

describe("Teachers test - Integration", () => {
    it("Register a teacher", async () => {
        const teacher = authFactory.createTeacher();
        const response = await supertest(app).post("/teacher/signup").send(teacher);
        const status = response.status;

        const findTeacherInDatabase = await prisma.teachers.findUnique({
            where: {
                email: teacher.email
            }
        });

        expect(teacher.email).toBe(findTeacherInDatabase.email);
        expect(status).toEqual(201);
    });

    it("Register a student",  async () => {
        const student = authFactory.createTeacher();
        const response = await supertest(app).post("/teacher/signup").send(student);
        const status = response.status;

        const findStudentInDatabase = await prisma.teachers.findUnique({
            where: {
                email: student.email
            }
        });

        expect(student.email).toBe(findStudentInDatabase.email);
        expect(status).toEqual(201);
    });

    it("Do teacher signin", async () => {
        const studentData = await authFactory.createStudent();

        const cryptpassword = await bcrypt.hash(studentData.password, 10);

        await prisma.students.create({
            data: {...studentData, password: cryptpassword}
        });
 
        const responseStudent = await supertest(app).post("/signin").send({ type: 'student', email: studentData.email, password: studentData.password });

        expect(responseStudent.status).toBe(200);
        expect(responseStudent.text).not.toBeUndefined();
    });

    it("Do student signin", async () => {
        const teacherData = authFactory.createTeacher();

        const cryptpassword = await bcrypt.hash(teacherData.password, 10);

        await prisma.teachers.create({
            data: {...teacherData, password: cryptpassword}
        });

        const responseTeacher = await supertest(app).post("/signin").send({ type: 'teacher', email: teacherData.email, password: teacherData.password });
        
        expect(responseTeacher.status).toBe(200);
        expect(responseTeacher.text).not.toBeUndefined();
    });
});

afterAll(async () => {
   await prisma.$disconnect();
})