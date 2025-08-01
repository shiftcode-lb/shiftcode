import axiosInstance from './axiosInstance';

export const fetchServices = async () =>{
    try {
        const res = await axiosInstance.get('/services');
        return res.data;
    } catch (error) {
        console.error("Error getting data");
        return
    }
}