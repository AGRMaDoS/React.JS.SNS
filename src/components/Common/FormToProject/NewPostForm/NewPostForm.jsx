import {Field, reduxForm} from "redux-form";
import React from "react";

let NewPostForm = (props) => {
    return (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field component={"textarea"} name={"newPost"}/>
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
    )
};

const NewPostFormRedux = reduxForm({form:'newPostProfile'})(NewPostForm)


export default NewPostFormRedux;
