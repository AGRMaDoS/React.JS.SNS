import style from "./Navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <Link to="profile">Profile</Link>
            </div>
            <div className={style.item}>
                <Link to='dialogs'>Messages</Link>
            </div>
            <div className={style.item}>
                <Link to='news'>News</Link>
            </div>
            <div className={style.item}>
                <Link to='music'>Music</Link>
            </div>
            <div className={style.item}>
                <Link to='settings'>Settings</Link>
            </div>
            <div className={style.item}>
                <Link to='findusers'>Find Users</Link>
            </div>
            <div className={style.item}>
                <Link to='friends'>Friends</Link>
            </div>
        </nav>
    )
};
export default Navbar