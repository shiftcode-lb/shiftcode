import axiosInstance from './axiosInstance'

export const fetchTeam = async () =>{
    try {
        const res = await axiosInstance.get('/team');
        console.log("test",res)
        return res.data;
    } catch (error) {
        console.error("Error getting data", error);
        return
    }
}