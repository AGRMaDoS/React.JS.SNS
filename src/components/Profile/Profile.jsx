import Myposts from "./Message/Myposts/Myposts";
import Post from "./Message/Post/Post";
import style from './Profile.module.css';
import ProfileHeader from "./Header/ProfileHeader";
import Avatar from "./Avatar/Avatar";
import MypostsContainer from "./Message/Myposts/MypostsContainer";

const Profile = (props) => {
    return (<div className={style.content}>
        <ProfileHeader/>
        <Avatar/>
        <MypostsContainer store={props.store}/>
    </div>)
};

export default Profile;