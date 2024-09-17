import {connect} from "react-redux";
import {followAC, setCurrent_PageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../Redux/Users-reducer";
import React from "react";
import  axios from "axios";
import Users from "./Users";

class UserContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrent_Page(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    };

    render() {


        return <Users totalUsersCount={this.props.totalUsersCount} currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize} onPageChanged={this.onPageChanged}
                      users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}/>

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        currentPage: state.findUsersPage.currentPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrent_Page: (pageNumber) => {
            dispatch(setCurrent_PageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
    }
}

const findUsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer);

export default findUsersContainer;





