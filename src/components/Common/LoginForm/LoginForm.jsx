import {Field, reduxForm} from "redux-form";
import styles  from "./LoginForm.module.css"
import {maxLengthCreator, minLengthCreator, riquired} from "../../../utils/validators/validators";

let minLength = minLengthCreator(5);
let maxLength = maxLengthCreator(20)

const InputForIsName = ({input,meta, ...props})=>{
    const hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error: " ")}>
            <div>
                <input {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

const LoginForm = (props) => {
    return (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field   placeholder='Login' name={"login"} validate={[riquired,maxLength]} component={InputForIsName} />
                    </div>
                    <div>
                        <Field   placeholder='Password' name={"password"} validate={[riquired,minLength]} component={InputForIsName} />
                    </div>
                    <div>
                        <Field  type='checkbox' name={"rememberMe"} component={"input"} /> Remember me!
                    </div>
                    <div>
                        <button type='submit'>Login</button>
                    </div>
                </form>
    )
};

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

export default LoginReduxForm;