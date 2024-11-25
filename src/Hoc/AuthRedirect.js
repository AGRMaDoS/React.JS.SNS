import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {

    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
    })

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login"/>;
            return <Component {...this.props} />;
        }
    }

    let connectRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return connectRedirectComponent
}

