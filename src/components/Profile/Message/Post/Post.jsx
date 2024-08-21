import style from './Post.module.css';


const Post = (props) => {
    return (
        <div className={style.post}>
            <div>
                {props.message}
            </div>
            <button><img
                src='https://cdn-icons-png.flaticon.com/512/10307/10307855.png' className={style.img}/>
                {props.like}</button>
        </div>
    )
};

export default Post;