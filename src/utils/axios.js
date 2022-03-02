import axios from 'axios';

let formInstance = axios.create({
    baseURL: '',
    headers: {},
});

formInstance.interceptors.request.use(
    function (config) {
        config.headers = {};
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default {formInstance};