import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3333/'
    baseURL: "http://95b227d2c9e7.ngrok.io"
})

export default api;