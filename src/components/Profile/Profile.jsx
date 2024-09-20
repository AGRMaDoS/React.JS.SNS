import style from './Profile.module.css';
import ProfileHeader from "./Header/ProfileHeader";
import Avatar from "./Avatar/Avatar";
import MypostsContainer from "./Message/Myposts/MypostsContainer";

const Profile = (props) => {
    return (<div className={style.content}>
        <ProfileHeader/>
        <Avatar profile={props.profile}/>
        <MypostsContainer/>
    </div>)
};

export default Profile;