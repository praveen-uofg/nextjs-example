import axios from '@/utils/axios';

export function submitFormData(url, data) {
    return axios.formInstance.post(url, data);
}