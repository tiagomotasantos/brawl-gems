import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.brawlstats.com/'
});

export const login = () => {
    axiosInstance.get('v6/auth/exchange-key').then(({ data }) => {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data}`;;
    });
}

export default axiosInstance;