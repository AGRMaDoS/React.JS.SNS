import {Route, Routes} from "react-router-dom";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import Friends from "../Friends/Friends";

const Mine = (props) => {
    return (
        <div className='app-wrapper-content'>
            <Routes>
                <Route path="*" element={<Profile post={props.state.profilePage.post} addPost={props.addPost}
                                                  newPostText={props.state.profilePage.newPostText}
                                                  updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/dialogs' element={<Dialogs dialog={props.state.dialogsPage.dialogs}
                                                         message={props.state.dialogsPage.messages}/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/friends' element={<Friends friend={props.state.friendsNav.friends}/>}/>
            </Routes>
        </div>
    )
}
export default Mine;