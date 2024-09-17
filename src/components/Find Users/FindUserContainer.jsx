import {connect} from "react-redux";
import findUsers from "./FindUsers";
import {followAC, setCurrent_PageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../Redux/findUsers-reducer";


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
        follow:(userID)=>{
            dispatch(followAC(userID));
        },
        unfollow:(userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrent_Page:(pageNumber)=>{
            dispatch(setCurrent_PageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setUsersTotalCountAC(totalCount))
        },
    }
}

const findUsersContainer = connect(mapStateToProps,mapDispatchToProps)(findUsers);

export default findUsersContainer;





