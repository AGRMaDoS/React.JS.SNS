import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    debugger;
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            <App/>
            </StoreContext.Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state)
});

reportWebVitals();
