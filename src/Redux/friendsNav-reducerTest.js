import {usersAPI} from "../Api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./Users-reducer";

const FRIEND_USERS = 'FRIEND_USERS'

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
    friendusers: []
};

const friendsNavReducer = (state = initialtState, action) => {
    switch (action.type) {
        case FRIEND_USERS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
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
        // case TOGGLE_IS_FOLLOWING_PROGRESS:
        //     return {
        //         ...state,
        //         followingInProgress: action.isFetching
        //             ? [...state.followingInProgress, action.userId]
        //             : state.followingInProgress.filter(id => id != action.userId)
        //     }
        default:
            return state;
    }
};


// const friendsNavReducer = (state = initialtState, action) => {
//     return state;
// };

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
};

export default friendsNavReducer;