import axios from 'axios';
import { BASE_URL } from '../BaseUrl';

const axiosInstance = axios.create({ baseURL:  BASE_URL});

export default axiosInstance;