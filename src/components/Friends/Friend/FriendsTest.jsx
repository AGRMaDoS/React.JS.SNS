import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import FriendTest from "./FriendTest";
import {usersAPI} from "../../../Api/api";

const FriendsTest = (props) => {
    debugger;

    const [data, setData] = useState([]);

    useEffect(() => {
        debugger
        const fetchData = async () => {
            const response = await usersAPI.getUsers1(1, 100)
            setData(response.items);
        }
        fetchData();
    }, []);

    console.log(data)


    if (!props.isAuth) return <Navigate to="/login"/>;
    const friendElements = data
        .filter((u) => u.followed)
        .map((u) => <FriendTest user={u}/>);
    return (
        <div>
            <div>Your Friends</div>
            <div>{friendElements}</div>
        </div>
    )
};

export default FriendsTest;