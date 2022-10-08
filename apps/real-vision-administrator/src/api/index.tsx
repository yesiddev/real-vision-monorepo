import axios from "axios";

export const rvApi = axios.create({
    baseURL: 'http://localhost:5000/api/v3'
})