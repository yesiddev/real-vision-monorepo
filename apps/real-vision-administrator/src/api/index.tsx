import axios from "axios";

export const rvApi = axios.create({
    baseURL: 'https://real-vision-api.herokuapp.com'
})