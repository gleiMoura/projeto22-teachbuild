import {Request, Response} from "express";
import verifyToken from "../utils/tokenValidate.js";
import { createClassRequest, getAllRequests } from "../services/requestService.js";

export async function createRequests(req: Request, res: Response) {
    const requests = req.body;

    const { authorization } = req.headers;

    verifyToken(authorization);

    const requestsData = await createClassRequest(requests);

    res.status(201).send(requestsData);
};

export async function getTeacherRequest(req: Request, res: Response) {
    const { teacherId } = req.params;

    const { authorization } = req.headers;

    verifyToken(authorization);

    const requestsData = await getAllRequests( teacherId );

    res.status(200).send(requestsData)
}