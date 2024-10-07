import Friend from "./Friend/Friend";
import React from "react";
import {Navigate} from "react-router-dom";
const Friends = (props) => {
    if(!props.isAuth) return <Navigate to="/login"/>;
    const friendElement = props.friend.map((f) => {
        return <Friend name={f.name} avatar={f.avatarUrl}/>
    });
    return(
        <div >
            <div>Your Friends</div>
            <div>{friendElement}</div>
        </div>
    )
};

export default Friends;