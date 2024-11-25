import style from "./Avatar.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import ProfileDataFormRedux from "./ProfileDataForm";

const ProfileInfo = (props) => {
    // console.log(props)

    // let [editMode, setEditMode] = useState(false)

    const editMode = props.editMode

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData)
        // console.log(formData)
    }

    return (
        <div>
            <div>
                <b>Nick name: {props.profile.fullName}</b>
            </div>
            <img className={style.avatar}
                 src={props.profile.photos.large || userPhoto} alt='ProfileInfo'/>
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={props.status}
                                    updateUserStatus={props.updateUserStatus}/>
            {editMode ?
                <ProfileDataFormRedux initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> :
                <ProfileData goToEditmode={() => {
                    props.setEditMode(true)
                    // setEditMode(true)
                }}
                             profile={props.profile} isOwner={props.isOwner}/>}
        </div>
    )
}

const Contact = (props) => {
    return <div className={style.contact}><b>{props.contactTitle}</b>: {props.contactValue}</div>
}

const ProfileData = (props) => {
    return <div>
        {<div>
            {props.isOwner && <button onClick={props.goToEditmode}>Edit</button>}
        </div>}
        <div>
            <b>About me</b>:<b>{props.profile.aboutMe}</b>
        </div>
        <div>
            <b>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</b>
        </div>
        {props.profile.lookingForAJobDescription &&
            <div>
                <b> My professional skills</b>: <b>{props.profile.lookingForAJobDescription}</b>
            </div>
        }
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
    </div>
}


export default ProfileInfo;