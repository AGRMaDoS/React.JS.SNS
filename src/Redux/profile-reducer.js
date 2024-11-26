import {profileAPI, usersAPI} from "../Api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile-reducer/ADD-POST';
const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE';
const SET_STATUS = 'profile-reducer/SET_STATUS';
const DELETE_POST = 'profile-reducer/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile-reducer/SAVE_PHOTO';
const SET_EDIT_MODE = 'profile-reducer/SET_EDIT_MODE';


let initialtState = {
    post: [{id: 1, post: 'Hi, how are you ?', like: ' 15'}, {id: 2, post: "It's my first post", like: ' 20'},],
    profile: null,
    status: "",
    editMode: false,

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
        case SAVE_PHOTO_SUCCESS:
            debugger;
            return {
                ...state, profile: {...state.profile, photos: action.photos},
            }
        case SET_EDIT_MODE:
            return {
                ...state, editMode: action.editMode,
            }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getStatusProfile = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const setEditMode = (editMode) => ({type: SET_EDIT_MODE, editMode})


export const getProfile = (userID) => async (dispatch) => {
    let response = await usersAPI.getProfile(userID)
    // console.log(response)
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
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    console.log(response.data)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile);
    // console.log(response)
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
        dispatch(setEditMode(false));
    } else {
        let wrongNetwork = response.data.messages[0]
            .slice(
                response.data.messages[0].indexOf(">") + 1,
                response.data.messages[0].indexOf(")")
            )
            .toLocaleLowerCase();
        dispatch(
            stopSubmit("edit-profile", {
                contacts: {[wrongNetwork]: response.data.messages[0]}
            })
        );
    }
};

export default profileReducer;