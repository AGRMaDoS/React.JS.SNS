import style from "./Avatar.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <img className={style.avatar}
                 src={props.profile.photos.large} alt='ProfileInfo'/>
            <ProfileStatus status={'ЙАхооо Маза-Факеры'}/>
        </div>
    )
}

export default ProfileInfo;