import Friends from "../Friends";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../Hoc/AuthRedirect";

const mapStateToProps = (state) => {
    return {
        friend: state.friendsNav.friends,
    }
};

const mapDispatchToProps = (dispatch) => {

}

let AuthRedirectComponent = withAuthRedirect(Friends)

const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default FriendsContainer;