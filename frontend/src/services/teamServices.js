import axiosInstance from './axiosInstance'

export const fetchTeam = async () =>{
    try {
        const res = await axiosInstance.get('/team/count');
        console.log("team" + res.data)
        return res.data;
    } catch (error) {
        console.error("Error getting data", error);
        return
    }
}