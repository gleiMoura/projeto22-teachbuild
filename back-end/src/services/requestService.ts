import requestRepository from "../repositories/requestRepository.js";
import { requestType } from "../repositories/requestRepository.js";

export async function createClassRequest(request: requestType) {
    const classRequest = await requestRepository.findRequest(request.teacherId, request.hourstart);

    if (classRequest) {
        throw {
            response: {
                message: "There is this request in database",
                status: 409
            }
        }
    }

    const data = await requestRepository.createNewRequest(request);

    return data
}