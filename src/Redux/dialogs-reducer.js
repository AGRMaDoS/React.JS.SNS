const ADD_MESS = 'ADD-MES';

let initialtState = {
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
}

const dialogsReducer = (state = initialtState, action) => {
    switch (action.type) {
        case ADD_MESS:
            let newMess = {
                id: 7,
                message: action.newMessageBody,
            }
            return {
                ...state,
                messages:[...state.messages,newMess]
            }
        default:
            return state;
    }
};

export const addMessActionCreator = (newMessageBody) => ({type: ADD_MESS,newMessageBody});


export default dialogsReducer;