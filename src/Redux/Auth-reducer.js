const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';


let initialtState = {
    id: null,
    email: null,
    login: null,
    isAuth:false,
    };

const authReducer = (state = initialtState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true,
            }

        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map(u => {
        //             if (u.id === action.userId) {
        //                 return {...u, followed: false}
        //             }
        //             return u
        //         })
        //     }
        //
        // case SET_USERS:
        //     return {...state, users: action.users}
        // case SET_CURRENT_PAGE:
        //     return {...state, currentPage: action.currentPage}
        // case SET_TOTAL_USERS_COUNT:
        //     return {...state, totalUsersCount: action.count}
        // case TOGGLE_IS_FETCHING:
        //     return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
};

export const setAuthUserData = (id,email,login) => ({type: SET_USER_DATA,data:{id,email,login} });
// export const unfollow = (userId) => ({type: UNFOLLOW, userId});
// export const setUsers = (users) => ({type: SET_USERS, users});
// export const setCurrent_Page = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
// export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
// export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});


export default authReducer