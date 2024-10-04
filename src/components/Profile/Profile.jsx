import style from './Profile.module.css';
import ProfileHeader from "./Header/ProfileHeader";
import ProfileInfo from "./Avatar/ProfileInfo";
import MypostsContainer from "./Message/Myposts/MypostsContainer";

const Profile = (props) => {
    return (<div className={style.content}>
        <ProfileHeader/>
        <ProfileInfo profile={props.profile}/>
        <MypostsContainer/>
    </div>)
};

export default Profile;