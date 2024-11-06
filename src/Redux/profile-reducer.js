import {profileAPI, usersAPI} from "../Api/api";

const ADD_POST = 'profile-reducer/ADD-POST';
const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE';
const SET_STATUS = 'profile-reducer/SET_STATUS';
const DELETE_POST = 'profile-reducer/DELETE_POST';


let initialtState = {
    post: [{id: 1, post: 'Hi, how are you ?', like: ' 15'}, {id: 2, post: "It's my first post", like: ' 20'},],
    profile: null,
    status: "",

}

const profileReducer = (state = initialtState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3, post: action.newPost, like: '',
            }
            return {
                ...state, post: [...state.post, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state, status: action.status,
            }
        case DELETE_POST:
            return {
                ...state, post: state.post.filter(p => p.id != action.postId)
            }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getStatusProfile = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getProfile = (userID) => async (dispatch) => {
    let response = await usersAPI.getProfile(userID)
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userID) => async (dispatch) => {
    let response = await profileAPI.getStatus(userID);
    dispatch(getStatusProfile(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(getStatusProfile(status));
    }
};

export default profileReducer;