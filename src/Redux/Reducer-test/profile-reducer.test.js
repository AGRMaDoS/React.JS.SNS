import profileReducer, {addPostActionCreator, deletePost} from "../profile-reducer";

let state = {
    post: [
        {id: 1, post: 'Hi, how are you ?', like: ' 15'},
        {id: 2, post: "It's my first post", like: ' 20'},
    ],
};

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("testim test");
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post.length).toBe(3);
});
test('message of new posts should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("testim test");
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post[2].post).toBe("testim test");
});
test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(5)
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.post.length).toBe(1);
});