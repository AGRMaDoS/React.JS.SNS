import {authAPI} from "../Api/api";
import {stopSubmit} from "redux-form";
import {initializedSuccess} from "./App-reducer";

const SET_USER_DATA = 'SET_USER_DATA';

let initialtState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const headerReducer = (state = initialtState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const authGet = () => {
    return (dispatch) => {
        authAPI.authGet()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login, true))
                }
                dispatch(initializedSuccess())
            })
    }
};
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then((data) => {
                if (data.data.resultCode === 0) {
                    dispatch(authGet())
                } else {
                    let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
                    dispatch(stopSubmit("login", {_error: message}))
                }
            })
    }
};
export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then((data) => {
                if (data.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
};

export default headerReducer