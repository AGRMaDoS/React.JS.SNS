import style from "./Avatar.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <input type="file"/>
                <button>Загрузить</button>
            </div>
            <img className={style.avatar}
                 src={props.profile.photos.large || userPhoto} alt='ProfileInfo'/>
            <ProfileStatusWithHooks status={props.status}
                                    updateUserStatus={props.updateUserStatus}/>
        </div>
    )
}

export default ProfileInfo;