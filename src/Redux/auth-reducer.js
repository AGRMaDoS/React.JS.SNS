import {authAPI, securityAPI} from "../Api/api";
import {stopSubmit} from "redux-form";
import {initializedSuccess} from "./App-reducer";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialtState = {
    id: null, email: null, login: null, isAuth: false, captchaUrl: null,
};

const authReducer = (state = initialtState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state, ...action.payload,
            }
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: {id, email, login, isAuth}
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

export const authGet = () => async (dispatch) => {
    let data = await authAPI.authGet();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
    dispatch(initializedSuccess())
};
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.data.resultCode === 0) {
        dispatch(authGet())
    } else {
        if (data.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
};
export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer