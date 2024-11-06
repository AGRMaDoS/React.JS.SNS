import {Route, Routes} from "react-router-dom";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import DialogsContainer from "../Dialogs/Message/DialogsContainer";
import FindUserContainer from "../FindUsers/UsersContainer";
import ProfileContainer from "../Profile/Message/ProfileContainer";
import Login from "../Login/Login";
import FriendsContainerTest from "../Friends/Friend/FriendsContainer";

const Mine = () => {
    return (
        <div className='app-wrapper-content'>
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
        </div>
    )
}
export default Mine;