import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";

const Myposts = (props) => {
    let newPostEl = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        props.dispatch(updateNewPostTextActionCreator(''))
    };

    let onPostChange = () => {
        let text = newPostEl.current.value;
        console.log(text);
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (<div>
        <div>
            <p>My posts</p>
        </div>
        <div/>
        <div>
            <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText}/>
        </div>
        <div>
            <button onClick={addPost}>Send</button>
        </div>
    </div>)
}

export default Myposts;