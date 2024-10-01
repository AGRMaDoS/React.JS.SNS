import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authGet, setAuthUserData} from "../../Redux/Header-reducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.authGet();
    }

    render() {
       return(<Header {...this.props}/>)
    }
}

const mapStateToProps = (state)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    email:state.auth.email,
})

export default connect(mapStateToProps,{setAuthUserData,authGet})(HeaderContainer);