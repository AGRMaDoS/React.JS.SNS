import React from "react";
import style from "./FindUsers.module.css";

const findUsersPage = (props) => {
    if(props.users.length===0){
        props.setUsers([
            {
                id: 1,
                photoUrl:'https://img.championat.com/s/732x488/news/big/r/b/10-priznakov-nastoyaschego-muzhchiny-prover-sebya_1671197209553984706.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl:'https://img.championat.com/s/732x488/news/big/r/b/10-priznakov-nastoyaschego-muzhchiny-prover-sebya_1671197209553984706.jpg',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl:'https://img.championat.com/s/732x488/news/big/r/b/10-priznakov-nastoyaschego-muzhchiny-prover-sebya_1671197209553984706.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }

   return <div>
       {
           props.users.map(u=> <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={style.avatar} alt='Avatar'/>
                </div>
                <div>
                    { u.followed
                        ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                        :<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
               <span>
                   <span>
                       <div>{u.fullName}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                   </span>
               </span>
           </div>)
       }
   </div>

}


export default findUsersPage;