import React from "react";
import Dialogs from "../Dialogs";
import {addMessActionCreator, updateNewMessageChangeActionCreator} from "../../../Redux/dialogs-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    const onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageChangeActionCreator(text))
    };

    let addMess = () => {
        props.store.dispatch(addMessActionCreator());
        props.store.dispatch(updateNewMessageChangeActionCreator(''));
    };

    return (
        <Dialogs dialog={state.dialogsPage.dialogs} message={state.dialogsPage.messages} newMessText={state.dialogsPage.newMessText}
                 updateNewMessageText={onMessageChange} addMess={addMess}/>)
}

export default DialogsContainer








