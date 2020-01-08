
import axios from './axios';

export const getPlayer = (tag) => {
    return axios.get(`player?tag=${tag}`);
}