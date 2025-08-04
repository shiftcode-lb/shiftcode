import axiosInstance from './axiosInstance'

export const fetchTeam = async () =>{
    try {
        console.log("hi")
        const res = await axiosInstance.get('/team');
        console.log("test",res)
        return res.data;
    } catch (error) {
        console.error("Error getting data", error);
        return
    }
}