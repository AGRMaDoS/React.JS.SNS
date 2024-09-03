import {Route, Routes} from "react-router-dom";
import Profile from "../Profile/Profile";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import Friends from "../Friends/Friends";
import DialogsContainer from "../Dialogs/Message/DialogsContainer";

const Mine = (props) => {
    return (
        <div className='app-wrapper-content'>
            <Routes>
                <Route path="*" element={<Profile store={props.store}/>}/>
                <Route path='/dialogs' element={<DialogsContainer store={props.store}/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/friends' element={<Friends friend={props.state.friendsNav.friends}/>}/>
            </Routes>
        </div>
    )
}
export default Mine;