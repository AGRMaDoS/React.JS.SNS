import Dialogs from "../Dialogs";
import {addMessActionCreator} from "../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../Hoc/AuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialog: state.dialogsPage.dialogs,
        message: state.dialogsPage.messages,
        newMessText: state.dialogsPage.newMessText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMess: (newMessageBody) => {
            dispatch(addMessActionCreator(newMessageBody));
        }
    }
}

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs)








