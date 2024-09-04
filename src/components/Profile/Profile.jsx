import style from './Profile.module.css';
import ProfileHeader from "./Header/ProfileHeader";
import Avatar from "./Avatar/Avatar";
import MypostsContainer from "./Message/Myposts/MypostsContainer";

const Profile = () => {
    return (<div className={style.content}>
        <ProfileHeader/>
        <Avatar/>
        <MypostsContainer/>
    </div>)
};

export default Profile;