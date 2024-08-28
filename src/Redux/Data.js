const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESS = 'ADD-MES';
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE'

const store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
            ],
            newMessText: '',
        },
        profilePage: {
            post: [
                {id: 1, post: 'Hi, how are you ?', like: ' 15'},
                {id: 2, post: "It's my first post", like: ' 20'},
            ],
            newPostText: '',
        },
        friendsNav: {
            friends: [
                {
                    name: 'Alex',
                    avatarUrl: 'https://cdnmedia.220-volt.ru/content/products/696/696627/images/original/n1200x800_q80/1.jpeg',
                },
                {
                    name: 'Pedro',
                    avatarUrl: 'https://cdnmedia.220-volt.ru/content/products/696/696627/images/original/n1200x800_q80/1.jpeg',
                },
                {
                    name: 'Karlos',
                    avatarUrl: 'https://cdnmedia.220-volt.ru/content/products/696/696627/images/original/n1200x800_q80/1.jpeg',
                },
            ],
        },

    },
    _callSubcriber() {
        console.log('State changed')
    },

    getState() {
        debugger;
        return this._state
    },
    subscribe(observer) {
        this._callSubcriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                post: this._state.profilePage.newPostText,
                like: '',
            }
            this._state.profilePage.post.push(newPost);
            this._callSubcriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newTextPost;
            this._callSubcriber(this._state)
        } else if (action.type === ADD_MESS) {
            let newMess = {
                id: 7,
                message: this._state.dialogsPage.newMessText,
            }
            this._state.dialogsPage.messages.push(newMess);
            this._callSubcriber(this._state)
        } else if (action.type === ON_MESSAGE_CHANGE) {
            this._state.dialogsPage.newMessText = action.newTextMess;
            this._callSubcriber(this._state)
        }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newTextPost: text,
});

export const addMessActionCreator = () => ({type: ADD_MESS});

export const updateNewMessageChangeActionCreator = (text) => ({
    type: ON_MESSAGE_CHANGE,
    newTextMess: text,
});


window.state = store;

export default store;
