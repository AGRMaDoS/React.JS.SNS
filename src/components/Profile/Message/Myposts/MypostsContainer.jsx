import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import Myposts from "./Myposts";
import StoreContext from "../../../../StoreContext";

const MypostsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();
            let addPost = () => {
                store.dispatch(addPostActionCreator());
                store.dispatch(updateNewPostTextActionCreator(''))
            };
            let onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text)
                store.dispatch(action)

            };
            return <Myposts post={state.profilePage.post} updateNewPostText={onPostChange} addPost={addPost}
                            newPostText={state.profilePage.newPostText}/>
                        }
        }
    </StoreContext.Consumer>
    }


    export default MypostsContainer;