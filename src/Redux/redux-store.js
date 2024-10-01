import {applyMiddleware, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsNavReducer from "./friendsNav-reducer";
import {configureStore} from "@reduxjs/toolkit";
import findUsersReducer from "./Users-reducer";
import headerReducer from "./Header-reducer";
import {thunk  as thunkMiddleware} from "redux-thunk";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    friendsNav:friendsNavReducer,
    findUsersPage:findUsersReducer,
    auth:headerReducer,
    });

let store = configureStore({reducer:reducers},applyMiddleware(thunkMiddleware));

window.store=store;

export default store ;