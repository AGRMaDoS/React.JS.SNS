import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import {addMessActionCreator, updateNewMessageChangeActionCreator,} from "../../Redux/Data";

const Dialogs = (props) => {

    const {dialog} = props
    const dialogsElement = dialog.map((d) => {
        return <Dialog name={d.name} id={d.id}/>
    });
    const {message} = props
    const messagesElement = message.map((m) => {
        return <Message message={m.message}/>
    });

    const onMessageChange = (e) => {
        let text = e.target.value
        console.log(text)
        props.dispatch(updateNewMessageChangeActionCreator(text))
    };

    let addMess = () => {
        props.dispatch(addMessActionCreator());
        props.dispatch(updateNewMessageChangeActionCreator(''));
    };

    return (<div className={style.dialogs}>
        <div className={style.dialogs_items}>
            {dialogsElement}
        </div>
        <div className={style.messages}>
            <div>{messagesElement}</div>
        </div>
        <div>
            <textarea placeholder='Напиши своему друг :)' onChange={onMessageChange}  value={props.newMessText}/></div>
        <div>
            <button onClick={addMess}>Send</button>
        </div>
    </div>);
}

export default Dialogs








