import axios from "axios";

const BASE_URL = "http://localhost:4000";

function createUser(teacherOrStudent, body) {
    const promise = axios.post(`${BASE_URL}/${teacherOrStudent}/signup`, body); 
    return promise;
};

function loginUser(body) {
    const promise = axios.post(`${BASE_URL}/signin`, body);
    return promise;
};

const API = {
    createUser,
    loginUser
};

export default API;