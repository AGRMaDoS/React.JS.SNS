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

    async getProfile(userId) {
        return await instance.get(`profile/` + userId);
    },
};
export const profileAPI = {
    async getStatus(userId) {
        return await instance.get(`profile/status/` + userId);
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
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}
export const securityAPI = {
    async getCaptchaUrl() {
        return await instance.get(`security/get-captcha-url`)
    },
}



