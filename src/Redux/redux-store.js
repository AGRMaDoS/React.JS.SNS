import {applyMiddleware, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsNavReducer from "./friendsNav-reducer";
import {configureStore} from "@reduxjs/toolkit";
import findUsersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";
import {thunk as thunkMiddleware} from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import AppReducer from "./App-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsNav: friendsNavReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer,
    form: formReducer,
    app: AppReducer,
});

let store = configureStore({reducer: reducers}, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;