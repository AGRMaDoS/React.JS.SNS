import style from "./Dialog.module.css";
import {Link} from "react-router-dom";

const Dialog = (props) => {

    return (
        <div className={style.dialog}>
            <Link to={'/dialogs/' + props.id}>{props.name}</Link>
        </div>
    )
};



export default Dialog;