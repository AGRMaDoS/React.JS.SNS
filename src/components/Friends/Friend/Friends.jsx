import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import Friend from "./Friend";
import {usersAPI} from "../../../Api/api";
import Paginator from "../../Common/Paginator/Paginator";
import {useSelector} from "react-redux";
import {currentPageSelector, pageSizeSelector, totalItemsCountSelector} from "../../../Redux/selectors/Selectors";
import {getUsers, setCurrent_Page, toggleIsFetching} from "../../../Redux/Users-reducer";

const Friends = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await usersAPI.getUsers1(1, 100)
            setData(response.items);
        }
        fetchData();
    }, []);

    const currentPage = useSelector(currentPageSelector);
    const totalUsersCount = useSelector(totalItemsCountSelector);
    const pageSize = useSelector(pageSizeSelector);

    const onPageChanged = (pageNumber) => {
        setCurrent_Page(pageNumber);
        toggleIsFetching(true);
        getUsers(pageNumber, pageSize);
    };


    if (!props.isAuth) return <Navigate to="/login"/>;
    const friendElements = data
        .filter((u) => u.followed)
        .map((u) => <Friend user={u}/>);
    return (
        <div>
            <div>Your Friends</div>
            <Paginator currentPage={currentPage} totaItemsCount={totalUsersCount}
                       pageSize={pageSize} onPageChanged={onPageChanged}/>
            <div>{friendElements}</div>
        </div>
    )
};

export default Friends;