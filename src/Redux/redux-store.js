import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsNavReducer from "./friendsNav-reducer";
import {configureStore} from "@reduxjs/toolkit";
import findUsersReducer from "./findUsers-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    friendsNav:friendsNavReducer,
    findUsersPage:findUsersReducer
    });

let store = configureStore({reducer:reducers});

export default store ;