import requestRepository from "../repositories/requestRepository.js";
import { requestType } from "../repositories/requestRepository.js";

export async function createClassRequest(requests: requestType[]) {
    await requestRepository.deleteRequests(requests[0].teacherId)

   /*  let wrongRequest = null; 
    for(let i = 0; i < requests.length; i++) {
        wrongRequest = await requestRepository.findRequest(requests[i].teacherId, requests[i].day, requests[i].hourstart);
        break    
    }

    if( wrongRequest !== null ) {
        throw {
            response: {
                message: "there is conflict with day or hour",
                status: 409
            }
        }
    } */
    
    const data = await requestRepository.createNewRequests( requests );

    return data
};

export async function getAllRequests(teacherId: string) {
    const requests = await requestRepository.getRequestsByTeacherId(teacherId);

    if (!requests) {
        throw {
            response: {
                message: "This teacher is not in database",
                status: 404
            }
        }
    }

    return requests;
};