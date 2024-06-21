import axios from 'axios';

const token = localStorage.getItem('token')

const SERVER = axios.create({
    baseURL: "http://localhost:3400/api/",
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export default SERVER;
