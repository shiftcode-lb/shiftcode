import axiosInstance from './axiosInstance'

export const fetchProjects = async () =>{
    try {
        const res = await axiosInstance.get('/projects/count');
        return res.data;
    } catch (error) {
        console.error("Error getting data", error);
        return
    }
}
