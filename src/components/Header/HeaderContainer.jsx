import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authGet, logout, setAuthUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
        return (<Header {...this.props}/>)
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
})

export default connect(mapStateToProps, {setAuthUserData, authGet, logout})(HeaderContainer);