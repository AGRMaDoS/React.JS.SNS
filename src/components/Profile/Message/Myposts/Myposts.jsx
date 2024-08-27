import React from 'react';

const Myposts = (props) => {
    let newPostEl = React.createRef()

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            newText: ''
        })
    };

    let onPostChange = () => {
        let text = newPostEl.current.value;
        console.log(text);
        let action = {
            type: 'UPDATE-NEW-POST-TEXT',
            newText: text
        }
        props.dispatch(action);
    }

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
    </div>)
}

export default Myposts;