import prisma from "../config/database.js";

export async function findTeachers() {
    const data = prisma.teachers.findMany({
        select: {
            name: true,
            image: true,
            mbti: {
                select: {name: true, link: true}
            },
            disciplines: {
                select: {name: true}
            },
            likes: true,
            wallet: true,
            text: true
        },
        orderBy: { likes: "desc" },
        take: 10
    });

    return data
}