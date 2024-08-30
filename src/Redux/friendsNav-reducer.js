let initialtState = {
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
};


const friendsNavReducer = (state = initialtState, action) => {
    return state;
};

export default friendsNavReducer;