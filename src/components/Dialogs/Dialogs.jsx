import style from './Dialogs.module.css'
import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    const dialogsElement = props.dialog.map((d) => {
        return <Dialog name={d.name} id={d.id}/>
    });
    const messagesElement = props.message.map((m) => {
        return <Message message={m.message}/>
    });

    let addMess = (values) => {
        props.addMess(values.newMessageBody)
    };


    return (<div className={style.dialogs}>
        <div className={style.dialogs_items}>
            {dialogsElement}
        </div>
        <div className={style.messages}>
            <div>{messagesElement}</div>
        </div>
        <AddMessageFormRedux
            onSubmit={addMess}
        />
    </div>);
}

const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div>
            <Field component={"textarea"} name={"newMessageBody"} placeholder='Напиши своему друг :)'/>
            </div>
            <button >Send</button>
        </form>
)
}

const AddMessageFormRedux=reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs








