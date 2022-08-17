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

function getTeachers(config) {
    const promise = axios.get(`${BASE_URL}/teachers`, config);
    return promise;
};

function getStudents(config) {
    const promise = axios.get(`${BASE_URL}/students`, config);
    return promise;
};

function createRequests(config, body) {
    const promise = axios.post(`${BASE_URL}/request`, body, config);
    return promise;
};

function getRequestsToTeacher(config, teacherId) {
    const promise = axios.get(`${BASE_URL}/request/${teacherId}`, config);
    return promise;
} 

const API = {
    createUser,
    loginUser,
    getTeachers,
    getStudents,
    createRequests,
    getRequestsToTeacher
};

export default API;