import {Route, Routes} from "react-router-dom";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import DialogsContainer from "../Dialogs/Message/DialogsContainer";
import FriendsContainer from "../Friends/Friend/FriendsContainer";
import FindUserContainer from "../Find Users/UsersContainer";
import ProfileContainer from "../Profile/Message/ProfileContainer";

const Mine = () => {
    return (
        <div className='app-wrapper-content'>
            <Routes>
                <Route path="*" element={<ProfileContainer/>}/>
                <Route path='/dialogs' element={<DialogsContainer />}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/findusers' element={<FindUserContainer/>}/>
                <Route path='/friends' element={<FriendsContainer />}/>
            </Routes>
        </div>
    )
}
export default Mine;