import prisma from "../src/config/database.js";

async function main() {
    await prisma.$transaction([
        prisma.$executeRaw`insert into disciplines(name) values('Física')`,
        prisma.$executeRaw`insert into disciplines(name) values('Matemática')`,
        prisma.$executeRaw`insert into disciplines(name) values('Química')`,
        prisma.$executeRaw`insert into disciplines(name) values('Robótica/engenharia')`,
        prisma.$executeRaw`insert into disciplines(name) values('STEM')`
    ]);

    await prisma.$transaction([
        prisma.$executeRaw`insert into mbti (name, link) values ('1. Lógico (INTP)', 'https://www.16personalities.com/intp-personality')`,
        prisma.$executeRaw`insert into mbti (name, link) values ('2. Inovador (ENTP)','https://www.16personalities.com/entp-personality')`,
        prisma.$executeRaw`insert into mbti (name, link) values ('3. Comandante (ENTJ)','https://www.16personalities.com/entj-personality')`,
        prisma.$executeRaw`insert into mbti (name,link) values ('4. Arquiteto (INTJ)','https://www.16personalities.com/intj-personality')`,
        prisma.$executeRaw`insert into mbti (name, link) values ('5. Animador (ESFP)', 'https://www.16personalities.com/esfp-personality')`,
        prisma.$executeRaw`insert into mbti (name, link) values ('6. Aventureiro (ISFP)', 'https://www.16personalities.com/isfp-personality')`,
        prisma.$executeRaw`insert into mbti (name, link) values ('8. Empreendedor (ESTP)','https://www.16personalities.com/estp-personality')`,
        prisma.$executeRaw`insert into mbti (name, link) values ('9. Ativista (ENFP)', 'https://www.16personalities.com/enfp-personality')`,
        prisma.$executeRaw`insert into mbti (name, link) values ('10. Mediador (INFP)', 'https://www.16personalities.com/infp-personality')`,
        prisma.$executeRaw`insert into mbti (name, link) values ('11. Protagonista (ENFJ)','https://www.16personalities.com/enfj-personality')`,
        prisma.$executeRaw`insert into mbti (name, link) values ('12. Conselheiro (INFJ)','https://www.16personalities.com/infj-personality')`,
        prisma.$executeRaw`insert into mbti (name, link) values ('13. Executivo (ESTJ)','https://www.16personalities.com/esfj-personality')`,
        prisma.$executeRaw`insert into mbti (name, link) values ('14. Inspetores (ISTJ)','https://www.16personalities.com/istj-personality')`,
        prisma.$executeRaw`insert into mbti (name, link) values ('15. Defensor (ISFJ)','https://www.16personalities.com/isfj-personality')`,
        prisma.$executeRaw`insert into mbti (name, link) values ('16. Provedor (ESFJ)','https://www.16personalities.com/esfj-personality')`
    ]);
};

try{
    main();
}catch(error) {
    console.log(error);
    process.exit(1);
}finally{
    async () => {
        await prisma.$disconnect();
    };
};

