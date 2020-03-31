import axios from 'axios';
/*para conectar com o backend npm install axios*/

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;