import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "47a1fa6d-3b7e-4115-975e-64f31141506b"
    },
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    async getUsers1(currentPage, pageSize) {
        const resp = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return resp.data

    },

    followDelete(uid) {
        return instance.delete(`follow/${uid}`)
            .then(response => {
                return response.data
            });
    },

    folowPost(uid) {
        return instance.post(`follow/${uid}`)
            .then(response => response.data);
    },

    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
};
export const profileAPI = {
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put("profile/photo", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
};

export const authAPI = {
    authGet() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}



