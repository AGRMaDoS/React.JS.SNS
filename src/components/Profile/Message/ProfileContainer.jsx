import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {
    getProfile,
    getUserStatus,
    savePhoto,
    saveProfile,
    setEditMode,
    updateUserStatus
} from "../../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../../Hoc/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authID;
        }

        this.props.getProfile(userId);
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.router.params.userId}
                     savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authID: state.auth.id,
    editMode: state.profilePage.editMode
})


export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(connect(mapStateToProps, {
        getProfile,
        getUserStatus,
        updateUserStatus,
        savePhoto,
        saveProfile,
        setEditMode
    }), withRouter,
    withAuthRedirect)(ProfileContainer)