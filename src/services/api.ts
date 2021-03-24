import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})
export const github = axios.create({
    baseURL: 'https://github.com'
})
export const discord = axios.create({
    baseURL: 'https://https://discord.com/api/v8.com'
})