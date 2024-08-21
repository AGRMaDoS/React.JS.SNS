import React from 'react';
const Myposts = (props) => {
    let newPostEl = React.createRef()

    let addPost = () => {
        props.addPost();
        props.updateNewPostText('')
    };

    let onPostChange =() =>{
        let text = newPostEl.current.value;
        console.log(text);
        props.updateNewPostText(text)
    }

    return (<div>
        <div>
            <p>My posts</p>
        </div>
        <div/>
        <div>
            <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText}  />
        </div>
        <div>
            <button onClick={addPost}>Send</button>
        </div>
    </div>)
}

export default Myposts;