import axios from 'axios';

const URLS = {
    LOCALHOST: 'https://mystique-v2-americanas.juno.b2w.io',
    HOMOLOGACAO: 'https://mystique-v2-americanas.juno.b2w.io',
    PRODUCAO: 'https://mystique-v2-americanas.juno.b2w.io'
}

const api = axios.create({
    baseURL: URLS.LOCALHOST
});

export default api;