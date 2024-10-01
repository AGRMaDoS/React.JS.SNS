import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"47a1fa6d-3b7e-4115-975e-64f31141506b"
    },
})

export const usersAPI = {
    getUserstest (currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> {
              return response.data
            });
},
    followDelete(uid){
        return instance.delete(`follow/${uid}`)
            .then(response=>{
                return response.data
            });
    },
    folowPost(uid){
        return instance.post(`follow/${uid}`)
            .then(response => response.data);
    },
    authGet(){
        return instance.get(`auth/me`)
            .then(response=> response.data);
    },

    getProfile(userId) {
       return  instance.get(`profile/` + userId);
    },
};

