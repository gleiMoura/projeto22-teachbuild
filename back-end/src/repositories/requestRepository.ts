import prisma from "../config/database.js";

import { requests } from "@prisma/client";

export type requestType = Omit<requests, 'id'>;

async function findRequest(teacherId: number, hourstart: string) {
    const data:requests = await prisma.requests.findFirst({
        where: {
            teacherId,
            hourstart
        }
    });

    return data;
}

async function createNewRequest( request: requestType ) {
    const requestData = await prisma.requests.create({
        data: request
    });

    return requestData
};

async function getRequestsByTeacherId( teacherId: string ) {
    const id = parseInt(teacherId);

    const requests = prisma.requests.findMany({
        where: {teacherId: id}
    });

    return requests;
};

const requestRepository = {
    createNewRequest,
    findRequest,
    getRequestsByTeacherId
};

export default requestRepository;