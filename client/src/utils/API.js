import axios from 'axios';

const apiRoute =   "http://localhost:4003/api/";



export const SERVER = axios.create({
    baseUrl: apiRoute
})
