import {connect} from "react-redux";
import findUsers from "./FindUsers";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/findUsers-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users
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
    }
}

const findUsersContainer = connect(mapStateToProps,mapDispatchToProps)(findUsers);

export default findUsersContainer;





