import Friends from "../Friends";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../Hoc/AuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        friend: state.friendsNav.friends,
    }
};

const mapDispatchToProps = (dispatch) => {

}

export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Friends);