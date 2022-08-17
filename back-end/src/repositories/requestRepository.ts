import prisma from "../config/database.js";

import { requests } from "@prisma/client";

export type requestType = Omit<requests, 'id'>;

async function findRequest(teacherId: number, day: string, hourstart: string) {
    const data = await prisma.requests.findFirst({
        where: {teacherId, day, hourstart},
    });

    return data;
}

async function createNewRequests( requests: requestType[] ) {
    const requestsData = await prisma.requests.createMany({
        data: requests
    });

    return requestsData
};

async function getRequestsByTeacherId( teacherId: string ) {
    const id = parseInt(teacherId);

    const requests = prisma.requests.findMany({
        where: {teacherId: id}
    });

    return requests;
};

const requestRepository = {
    createNewRequests,
    findRequest,
    getRequestsByTeacherId
};

export default requestRepository;