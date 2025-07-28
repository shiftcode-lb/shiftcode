import api from './axiosInstance'

export const getAllProjects = async () => {
    const response = await api.get('/projects');
    return response.data;
}