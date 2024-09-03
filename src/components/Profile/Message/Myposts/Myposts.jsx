import Post from "../Post/Post";

const Myposts = (props) => {

    const postelements = props.post.map((p) => {
        return <Post message={p.post} like={p.like} />
    })

    let newPostEl = React.createRef()

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostEl.current.value;
        props.updateNewPostText(text);

    };

    return (<div>
        <div>
            <p>My posts</p>
        </div>
        <div/>
        <div>
            <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText}/>
        </div>
        <div>
            <button onClick={addPost}>Send</button>
        </div>
        <div>
            {postelements}
        </div>
    </div>)
}

export default Myposts;