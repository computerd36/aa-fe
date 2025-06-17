import axios from 'axios';

const isDevelopment = import.meta.env.VITE_ENV === 'development';

const axiosInstance = axios.create({
  baseURL: isDevelopment ? 'http://localhost:3000' : import.meta.env.VITE_ALERTAIGUA_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;