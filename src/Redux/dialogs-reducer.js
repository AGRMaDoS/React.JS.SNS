const ADD_MESS = 'ADD-MES';
const ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESS:
            let newMess = {
                id: 7,
                message: state.newMessText,
            }
            state.messages.push(newMess);
            return state;
        case ON_MESSAGE_CHANGE:
            state.newMessText = action.newTextMess;
            return state;
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