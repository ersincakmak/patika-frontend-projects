import axios from "axios";

const api = axios.create({
    baseURL: 'https://6214e82f17cf186d277c1343.mockapi.io/api/'
})

export default api