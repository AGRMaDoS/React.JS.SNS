import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p} </span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                     <NavLink to={'./../profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.avatar}
                         alt='Avatar'/>
                          </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{withCredentials:true,
                                headers:{
                                "API-KEY":"47a1fa6d-3b7e-4115-975e-64f31141506b"
                                }},
                            )
                                .then((response) => {
                                    if(response.data.resultCode === 0){
                                        props.unfollow(u.id)
                                    }
                                });
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {} , {withCredentials:true,
                                headers:{
                                    "API-KEY":"47a1fa6d-3b7e-4115-975e-64f31141506b"
                                }})
                                .then((response) => {
                                    if(response.data.resultCode === 0){
                                        props.follow(u.id)
                                    }
                                });
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                   <span>
                       <div>{u.name}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{"u.location.country"}</div>
                       <div>{"u.location.city"}</div>
                   </span>
               </span>
        </div>)
        }
    </div>
}


export default Users;