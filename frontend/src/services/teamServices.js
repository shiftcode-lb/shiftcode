import axiosInstance from './axiosInstance'

export const fetchTeam = async () =>{
    try {
        const res = await axiosInstance.get('/team');
        return res.data;
    } catch (error) {
        console.error("Error getting data", error);
        return
    }
}

export const teamCount = async () => {
    try{
        const res = await axiosInstance.get('/team/count');
        return res.data;
    } catch (error){
        console.error("Error getting data", error);
        return
    }
}