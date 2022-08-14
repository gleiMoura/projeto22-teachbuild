import prisma from "../config/database.js";

export async function findStudents() {
    const data = prisma.students.findMany({
        select: {
            name: true,
            image: true,
            mbti: {
                select: {name: true, link: true}
            },
            text: true
        },
        orderBy: { id: "desc" },
        take: 30
    });

    return data
}