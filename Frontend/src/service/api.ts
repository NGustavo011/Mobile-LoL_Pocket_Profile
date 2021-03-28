import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3333/'
    baseURL: "http://0b2fcca389c0.ngrok.io"
})

export default api;