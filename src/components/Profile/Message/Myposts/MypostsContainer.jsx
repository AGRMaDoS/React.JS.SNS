import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import Myposts from "./Myposts";

const MypostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
        props.store.dispatch(updateNewPostTextActionCreator(''))
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)

    };

    return (<Myposts post={state.profilePage.post}  updateNewPostText={onPostChange} addPost={addPost} newPostText={state.profilePage.newPostText} />)
}

export default MypostsContainer;