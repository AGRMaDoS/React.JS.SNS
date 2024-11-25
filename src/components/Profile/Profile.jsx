import style from './Profile.module.css';
import ProfileHeader from "./Header/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Message/Myposts/MypostsContainer";

const Profile = (props) => {
    // console.log(props);
    return (<div className={style.content}>
        <ProfileHeader/>
        <ProfileInfo profile={props.profile} status={props.status}
                     updateUserStatus={props.updateUserStatus} isOwner={props.isOwner}
                     savePhoto={props.savePhoto} saveProfile={props.saveProfile}
                     statusApi={props.statusApi} setEditMode={props.setEditMode}
                     editMode={props.editMode}/>
        <MypostsContainer/>
    </div>)
};

export default Profile;