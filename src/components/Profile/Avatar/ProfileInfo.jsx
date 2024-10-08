import style from "./Avatar.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <input type="file"  />
                <button >Загрузить</button>
            </div>
            <img className={style.avatar}
                 src={props.profile.photos.large} alt='ProfileInfo'/>
            <ProfileStatus status={props.status}
            updateUserStatus={props.updateUserStatus}/>
        </div>
    )
}

export default ProfileInfo;