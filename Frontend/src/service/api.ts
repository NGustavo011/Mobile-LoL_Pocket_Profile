import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3333/'
    //baseURL: "http://3004cdbf9b26.ngrok.io"
    baseURL: "https://mobilelolpocketprofile.herokuapp.com/"
})

export default api;