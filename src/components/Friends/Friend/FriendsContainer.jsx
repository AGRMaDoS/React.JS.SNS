import {connect} from "react-redux";
import {withAuthRedirect} from "../../../Hoc/AuthRedirect";
import {compose} from "redux";
import Friends from "./Friends";

const mapStateToProps = (state) => {
    return {
        friend: state.friendsNav.friends,
        users: state.findUsersPage.users,
    }
};

const mapDispatchToProps = (dispatch) => {

}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Friends);