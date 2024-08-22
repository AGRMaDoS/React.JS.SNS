let rerenderEntireTree =()=>{
    console.log('State changed')
};
const state = {
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
    },
    profilePage: {
        post: [
            {id: 1, post: 'Hi, how are you ?', like: ' 15'},
            {id: 2, post: "It's my first post", like: ' 20'},
        ],
        newPostText:'',
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

};

window.state = state;

export const addPost = (like) => {
    let newPost = {
        id: 3,
        post: state.profilePage.newPostText,
        like: like,
    }
    state.profilePage.post.push(newPost);
    rerenderEntireTree(state,addPost,updateNewPostText)
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state,addPost,updateNewPostText)
};
export const subscribe =(observer)=>{
        rerenderEntireTree=observer;
};

export default state;