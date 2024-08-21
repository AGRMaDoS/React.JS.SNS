import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree =(state,addPost,updateNewPostText)=>{
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}


export default rerenderEntireTree