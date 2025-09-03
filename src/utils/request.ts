import axios, { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import {ElMessage} from "element-plus";


const headers = {
    'Content-Type': 'application/json',
};
const _token = localStorage.getItem('token');
if (_token) {
    headers['Authorization'] = `Bearer ${_token}`; // Add token to headers if available
}
const service: AxiosInstance = axios.create({
    baseURL: '/api', // 所有请求的前缀部分
    timeout: 5000,
    headers: headers
});



service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            const data = response.data;
            if (data.code !== 200) {
                ElMessage.error(data.message);
            }
            return data;
        } else {
            Promise.reject();
        }
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
