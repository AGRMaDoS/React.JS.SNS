import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrent_Page,
    setTotalUsersCount,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../Redux/Users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrent_Page(pageNumber);
        this.props.toggleIsFetching(true);
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize} onPageChanged={this.onPageChanged}
                   users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        currentPage: state.findUsersPage.currentPage,
        isFetching: state.findUsersPage.isFetching,
        followingInProgress: state.findUsersPage.followingInProgress
    }
};

export default compose(connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrent_Page,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgress,
        getUsers,
    }))(UserContainer);





