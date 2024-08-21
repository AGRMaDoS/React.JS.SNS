import style from "./ProfileHeader.module.css";

const ProfileHeader = (props) => {
    return (
        <div>
            <img className={style.header}
                 src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
        </div>
    )
}

export default ProfileHeader;