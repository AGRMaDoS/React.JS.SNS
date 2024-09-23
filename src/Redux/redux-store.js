import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsNavReducer from "./friendsNav-reducer";
import {configureStore} from "@reduxjs/toolkit";
import findUsersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    friendsNav:friendsNavReducer,
    findUsersPage:findUsersReducer,
    auth:authReducer,
    });

let store = configureStore({reducer:reducers});

window.store=store;

export default store ;