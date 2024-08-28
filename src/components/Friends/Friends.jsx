import Friend from "./Friend/Friend";
const Friends = (props) => {
    const {friend}=props;
    const friendElement = friend.map((f) => {
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