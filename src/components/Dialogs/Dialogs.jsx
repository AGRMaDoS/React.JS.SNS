import style from './Dialogs.module.css'
import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
const Dialogs = (props) => {

    const dialogsElement = props.dialog.map((d) => {
        return <Dialog name={d.name} id={d.id}/>
    });
    const messagesElement = props.message.map((m) => {
        return <Message message={m.message}/>
    });

    const onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
    };

    let addMess = () => {
       props.addMess()
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








