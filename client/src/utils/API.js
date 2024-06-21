import axios from 'axios';

const apiRoute =   "http://localhost:4003/api/";

const token = localStorage.getItem('token')

const SERVER = axios.create({
    baseUrl: apiRoute,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export default SERVER;
