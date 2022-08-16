import {Request, Response} from "express";
import verifyToken from "../utils/tokenValidate.js";
import { createClassRequest } from "../services/requestService.js";

export async function createRequest(req: Request, res: Response) {
    const request = req.body;

    const { authorization } = req.headers;

    verifyToken(authorization);

    const requestData = await createClassRequest(request);

    res.status(201).send(requestData);
};