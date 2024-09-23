import {connect} from "react-redux";
import {follow, setCurrent_Page, setTotalUsersCount, setUsers, toggleIsFetching, unfollow} from "../../Redux/Users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials:true})
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrent_Page(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {withCredentials:true})
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize} onPageChanged={this.onPageChanged}
                   users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}/>
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
    }
};

const findUsersContainer = connect(mapStateToProps,
    {follow,unfollow,setUsers,setCurrent_Page,setTotalUsersCount,toggleIsFetching})(UserContainer);

export default findUsersContainer;





