const ADD_MESS = 'ADD-MES';
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE'

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
    newMessText: '',
}

const dialogsReducer = (state = initialtState, action) => {
    switch (action.type) {
        case ADD_MESS:
            let newMess = {
                id: 7,
                message: state.newMessText,
            }
            return {
                ...state,
                messages:[...state.messages,newMess]
            }
            // state.messages.push(newMess);
            // return state;
        case ON_MESSAGE_CHANGE:
            return {
                ...state,
                newMessText: action.newTextMess
            }
            // state.newMessText = action.newTextMess;
            // return state;
        default:
            return state;
    }
};

export const addMessActionCreator = () => ({type: ADD_MESS});

export const updateNewMessageChangeActionCreator = (text) => ({
    type: ON_MESSAGE_CHANGE,
    newTextMess: text,
});

export default dialogsReducer;