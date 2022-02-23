import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://172.17.0.1' });

export default axiosInstance;