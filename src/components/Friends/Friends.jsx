import Friend from "./Friend/Friend";
import style from './Friends.module.css'
const Friends = (props) => {
    const {friend}=props;
    const friendElement = friend.map((f) => {
        return <Friend name={f.name} avatar={f.avatarUrl}/>
    });
    return(
        <div className={style.header}>
            <div>Your Friends</div>
            <div>{friendElement}</div>
        </div>
    )
};

export default Friends;