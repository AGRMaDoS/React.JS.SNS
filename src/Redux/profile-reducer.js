import {profileAPI, usersAPI} from "../Api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialtState = {
    post: [
        {id: 1, post: 'Hi, how are you ?', like: ' 15'},
        {id: 2, post: "It's my first post", like: ' 20'},
    ],
    profile:null,
    status:"",

}

const profileReducer = (state = initialtState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                post: action.newPost,
                like: '',
            }
            return {
                ...state,
                post: [...state.post, newPost]
            }
            case SET_USER_PROFILE:
                return {
                    ...state,
                    profile: action.profile,
                }
                case SET_STATUS:
                return {
                    ...state,
                    status: action.status,
                }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPost) => ({type: ADD_POST,newPost});

export const setUserProfile = (profile)=>({type: SET_USER_PROFILE,profile})
export const getStatusProfile = (status)=>({type: SET_STATUS,status})

export const getProfile = (userID)=>{
    return (dispatch) =>{
        usersAPI.getProfile(userID).then((response) => {
            dispatch(setUserProfile(response.data));
        })
    }}
export const getUserStatus = (userID)=>{
    return (dispatch) =>{
        profileAPI.getStatus(userID).then((response) => {
            dispatch(getStatusProfile(response.data));
        })
    }}
export const updateUserStatus = (status)=>{
    return (dispatch) =>{
        profileAPI.updateStatus(status).then((response) => {
            if(response.data.resultCode===0){
            dispatch(getStatusProfile(status));}
        })
    }}

export default profileReducer;