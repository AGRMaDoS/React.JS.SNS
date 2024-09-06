import Friends from "../Friends";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friend: state.friendsNav.friends
    }
};

const mapDispatchToProps = (dispatch) => {

}

const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends);

export default FriendsContainer;