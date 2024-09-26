import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/Auth-reducer";
import {usersAPI as UserAPI} from "../../Api/api";

class HeaderContainer extends React.Component{

    componentDidMount() {
        UserAPI.authGet()
            .then((data) => {
                debugger;
                if(data.resultCode ===0){
                    let {id,login,email} = data.data;
                    this.props.setAuthUserData(id,email,login)
                }
            })
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

export default connect(mapStateToProps,{setAuthUserData,})(HeaderContainer);