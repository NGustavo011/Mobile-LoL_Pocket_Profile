import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3333/'
    baseURL: "http://a965e5323980.ngrok.io"
})

export default api;