import {Route, Routes} from "react-router-dom";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import ProfileContainer from "../Profile/Message/ProfileContainer";
import Login from "../Login/Login";
import Preloader from "../Common/Preloader/Preloader";
import React, {Suspense} from "react";

const DialogsContainer = React.lazy(() => import("../Dialogs/Message/DialogsContainer"));
const FindUserContainer = React.lazy(() => import("../FindUsers/UsersContainer"));
const FriendsContainerTest = React.lazy(() => import("../Friends/Friend/FriendsContainer"));

const Mine = () => {
    return (
        <div className='app-wrapper-content'>
            <Suspense fallback={<div><Preloader/></div>}>
                <Routes>
                    <Route path="*" element={<ProfileContainer/>}/>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/findusers' element={<FindUserContainer/>}/>
                    <Route path='/friends' element={<FriendsContainerTest/>}/>
                    <Route path={'login'} element={<Login/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}
export default Mine;