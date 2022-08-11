import axios from "axios";

const BASE_URL = "http://localhost:4000";

function createUser(user) {
    const promise = axios.post(`${BASE_URL}/${user}/signup`, body); 
    return promise;
};

function loginUser(user) {
    const promise = axios.post(`${BASE_URL}/${user}/signin`);
    return promise;
};

const API = {
    createUser,
    loginUser
};

export default API;