import style from "./Avatar.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const Avatar = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <img className={style.avatar}
                 src={props.profile.photos.small} alt='Avatar'/>
        </div>
    )
}

export default Avatar;