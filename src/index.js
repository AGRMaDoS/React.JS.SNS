import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updateNewPostText} from "./Redux/Data";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree =(state)=>{
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(state,addPost,updateNewPostText);

subscribe(rerenderEntireTree);

reportWebVitals();
