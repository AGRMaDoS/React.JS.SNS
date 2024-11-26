import LoginReduxForm from "../Common/LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import React from "react";


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return (<Navigate to="/profile"/>)
    }

    return (
        <div>
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);