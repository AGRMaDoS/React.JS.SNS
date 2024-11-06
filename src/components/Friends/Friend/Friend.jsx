import style from './Friend.module.css'
import userPhoto from "../../../assets/images/user.png";
import React from "react";

const Friend = (props) => {
    return (<div>
        <p className={style.text}>
            <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} className={style.avatar}
                 alt='ProfileInfo'/>
            {props.user.name}</p>
        <p>
            {props.user.status}
        </p>
        <div>
            <button>Unfollow</button>
        </div>

    </div>)
};

export default Friend;