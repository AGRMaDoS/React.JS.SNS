import LoginReduxForm from "../Common/FormToProject/LoginForm";


const Login = (props) => {
    const onSubmit=(formData)=>{
        console.log(formData)
    }

    return (
        <div>
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
};


export default Login;