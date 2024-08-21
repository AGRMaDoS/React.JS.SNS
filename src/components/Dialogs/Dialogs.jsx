import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let newMesEl = React.createRef();

    let addMess = () => {
        let text = newMesEl.current.value;
        alert(text)
    }

    const {dialog} = props
    const dialogsElement = dialog.map((d) => {
        return <Dialog name={d.name} id={d.id}/>
    });
    const {message} = props
    const messagesElement = message.map((m) => {
        return <Message message={m.message}/>
    });
    return (<div className={style.dialogs}>
        <div className={style.dialogs_items}>
            {dialogsElement}
        </div>
        <div className={style.messages}>
            {messagesElement}
        </div>
        <div>
            <textarea ref={newMesEl}></textarea></div>
        <div>
            <button onClick={addMess}>Send</button>
        </div>
    </div>);
}

export default Dialogs








