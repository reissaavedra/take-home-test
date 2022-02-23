import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://172.17.0.1' });
axiosInstance.defaults.headers.common['header1'] = 'value'

export default axiosInstance;