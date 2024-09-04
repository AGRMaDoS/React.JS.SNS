import React from "react";
import Dialogs from "../Dialogs";
import {addMessActionCreator, updateNewMessageChangeActionCreator} from "../../../Redux/dialogs-reducer";
import StoreContext from "../../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            debugger;
            let state = store.getState();
            const onMessageChange = (text) => {
                store.dispatch(updateNewMessageChangeActionCreator(text))
            };

            let addMess = () => {
                store.dispatch(addMessActionCreator());
                store.dispatch(updateNewMessageChangeActionCreator(''));
            };

            return <Dialogs dialog={state.dialogsPage.dialogs} message={state.dialogsPage.messages}
                            newMessText={state.dialogsPage.newMessText}
                            updateNewMessageText={onMessageChange} addMess={addMess}/>
        }
        }
        </StoreContext.Consumer>
}

export default DialogsContainer








