
import axios from './axios';

export const getPlayer = (tag) => {
    return axios.get(`v6/players/profiles/${tag}`);
}