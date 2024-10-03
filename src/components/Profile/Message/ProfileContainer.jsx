import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getProfile} from "../../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../../Hoc/AuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = 2;
        }

        this.props.getProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
})


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(withRouter(AuthRedirectComponent))