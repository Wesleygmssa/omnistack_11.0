
import axios from 'axios';

const api = axios.create({ // mantida entre todas as chamadas. PADRÂO
    baseURL: 'http://localhost:3333',
});

export default api;// outros arquivos consegue importa