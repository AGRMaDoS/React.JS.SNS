import {Field, reduxForm} from "redux-form";
import styles from "./LoginForm.module.css"
import {maxLengthCreator, minLengthCreator, riquired} from "../../../utils/validators/validators";

let minLength = minLengthCreator(5);
let maxLength = maxLengthCreator(20)

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

const LoginForm = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Email' name={"email"} validate={[riquired, maxLength]} component={personalError}/>
            </div>
            <div>
                <Field placeholder='Password' name={"password"} validate={[riquired, minLength]}
                       component={personalError} type={'password'}/>
            </div>
            <div>
                <Field type='checkbox' name={"rememberMe"} component={"input"}/> Remember me!
            </div>
            {props.captchaUrl && <img src={props.captchaUrl} alt={'Captcha'}/>}
            {props.captchaUrl &&
                <Field placeholder='Symbols from image' name={"captcha"} validate={riquired} component={personalError}
                       type={'input'}/>}
            {props.error && <div className={styles.formControl_Summary_Error}>
                {props.error}
            </div>}
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm;