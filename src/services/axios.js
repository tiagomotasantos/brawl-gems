import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.starlist.pro/v1/'
});

axiosInstance.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_TOKEN;

export default axiosInstance;