import Dialogs from "../Dialogs";
import {addMessActionCreator, updateNewMessageChangeActionCreator} from "../../../Redux/dialogs-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
            dialog: state.dialogsPage.dialogs,
            message: state.dialogsPage.messages,
            newMessText: state.dialogsPage.newMessText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText : (text) => {
            dispatch(updateNewMessageChangeActionCreator(text))
        },
        addMess: () => {
            dispatch(addMessActionCreator());
            dispatch(updateNewMessageChangeActionCreator(''))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);



export default DialogsContainer








