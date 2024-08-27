import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/Data";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState(), store.addPost, store.updateNewPostText);

store.subscribe(rerenderEntireTree);

reportWebVitals();
