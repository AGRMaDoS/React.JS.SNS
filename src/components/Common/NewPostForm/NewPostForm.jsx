import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../FormsControls/FormsControls";

let NewPostForm = (props) => {
    return (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field name={"newPost"} component={Textarea} placeholder={"Post message"}
                               validate={[]}   />
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
    )
};

const NewPostFormRedux = reduxForm({form:'newPostProfile'})(NewPostForm)


export default NewPostFormRedux;
