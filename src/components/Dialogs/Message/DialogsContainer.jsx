import Dialogs from "../Dialogs";
import {addMessActionCreator, updateNewMessageChangeActionCreator} from "../../../Redux/dialogs-reducer";
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
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageChangeActionCreator(text))
        },
        addMess: () => {
            dispatch(addMessActionCreator());
            dispatch(updateNewMessageChangeActionCreator(''))
        }
    }
}

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs)








