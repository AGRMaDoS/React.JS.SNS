import {connect} from "react-redux";
import {follow, setCurrent_Page, setTotalUsersCount, setUsers, toggleIsFetching, unfollow} from "../../Redux/Users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../Api/api";

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUserstest(this.props.currentPage,this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrent_Page(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUserstest(pageNumber,this.props.pageSize).then((data) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
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





