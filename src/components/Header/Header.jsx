import style from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={style.header}>
            <img
                src='https://static.vecteezy.com/system/resources/previews/005/076/592/non_2x/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg' alt='header'/>
            <div className={style.loginBlock}>
                {props.isAuth ?<div> {props.login} - <button onClick={props.logout}>Logout</button> </div>:<NavLink to={'/login'}>Login</NavLink>}
                <p>{props.isAuth ? props.email:null }</p>
            </div>
        </header>
    )
};

export default Header;