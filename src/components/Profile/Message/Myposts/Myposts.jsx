import React from 'react';
import Post from "../Post/Post";
import NewPostFormRedux from "../../../Common/NewPostForm/NewPostForm";


function Myposts(props) {

    const postelements = props.post.map((p) => {
        return <Post message={p.post} like={p.like}/>
    })

    let addPost = (values) => {
        props.addPost(values.newPost);
    };

    return (<div>
        <div>
            <p>My posts</p>
        </div>
        <div/>
        < NewPostFormRedux onSubmit={addPost}/>
        <div>
            {postelements}
        </div>
    </div>)
}

export default Myposts;