import {Field, reduxForm} from "redux-form";
import style from "./Avatar.module.css";
import styles from "../../Common/LoginForm/LoginForm.module.css";
import {maxLengthCreator} from "../../../utils/validators/validators";

const personalError = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

const riquired = value => {
    if (value) {
        return undefined
    }
    return undefined
}

const maxLength = maxLengthCreator(20)

const ProfileDataForm = (props) => {
    // console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <b>Nick Name</b> : <Field placeholder='Nick name' name={"fullName"} validate={[riquired, maxLength]}
                                          component={personalError}/>
            </div>
            <div>
                <b>Looking for a job:</b>
                <Field type={"checkbox"} name={"lookingForAJob"} component={"input"}/>
            </div>
            <div>
                <b> My professional skills</b>:
                <Field placeholder='My professional skills' name={"lookingForAJobDescription"} component={"textarea"}/>
            </div>
            <div>
                <b>About me</b>:
                <Field placeholder='About me' name={"aboutMe"} component={"textarea"}/>
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={style.contact}>
                    <b>{key}:<Field placeholder={key} name={"contacts." + key} validate={riquired}
                                    component={personalError}/></b>
                </div>
            })}
            </div>
            {props.error && <div className={styles.formControl_Summary_Error}>
                {props.error}
            </div>}
            <div>
                <button>Save</button>
            </div>
        </form>
    )
};

const ProfileDataFormRedux = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormRedux