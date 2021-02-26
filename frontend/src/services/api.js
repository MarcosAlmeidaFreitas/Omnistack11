// antes de fazer esse arquivo tem que instalar o axios com o npm install axios ele fazer as chamas http para 
// o backend

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;