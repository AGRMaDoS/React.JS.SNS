const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialtState = {
    post: [
        {id: 1, post: 'Hi, how are you ?', like: ' 15'},
        {id: 2, post: "It's my first post", like: ' 20'},
    ],
    newPostText: '',
    profile:null,
}

const profileReducer = (state = initialtState, action) => {
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
            case SET_USER_PROFILE:
                return {
                    ...state,
                    profile: action.profile,
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

export const setUserProfile = (profile)=>({type: SET_USER_PROFILE,profile})

export default profileReducer;