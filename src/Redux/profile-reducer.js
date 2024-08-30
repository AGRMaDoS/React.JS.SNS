const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialtState = {
    post: [
        {id: 1, post: 'Hi, how are you ?', like: ' 15'},
        {id: 2, post: "It's my first post", like: ' 20'},
    ],
    newPostText: '',
}

const profileReducer = (state = initialtState, action) => {
    debugger;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                post: state.newPostText,
                like: '',
            }
            // state.post.push(newPost);
            return {
                ...state,
                post: [...state.post, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            // state.newPostText = action.newTextPost;
            return {
                ...state,
                newPostText: action.newTextPost
            }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newTextPost: text,
});

export default profileReducer;