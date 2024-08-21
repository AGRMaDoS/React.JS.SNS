import Myposts from "./Message/Myposts/Myposts";
import Post from "./Message/Post/Post";
import style from './Profile.module.css';
import ProfileHeader from "./Header/ProfileHeader";
import Avatar from "./Avatar/Avatar";

const Profile = (props) => {
    const {post} = props;
    const postelements = post.map((p) => {
        return <Post message={p.post} like={p.like} />
    })
    return (<div className={style.content}>
        <ProfileHeader/>
        <Avatar/>
        <Myposts addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
        {postelements}
    </div>)
};

export default Profile;