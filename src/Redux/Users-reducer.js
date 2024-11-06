import {usersAPI} from "../Api/api";
import {updateObjectInArray} from "../utils/objects-helpers";

const FOLLOW = 'user-reducer/FOLLOW';
const UNFOLLOW = 'user-reducer/UNFOLLOW';
const SET_USERS = 'user-reducer/SET_USERS';
const SET_CURRENT_PAGE = 'user-reducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'user-reducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'user-reducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'user-reducer/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialtState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const UsersReducer = (state = initialtState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                //     state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u
                // })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }

        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrent_Page = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId
});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

const folowUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userID));
    let data = await apiMethod(userID);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleFollowingProgress(false, userID))
};

export const follow = (userID) => async (dispatch) => {
    folowUnfollowFlow(dispatch, userID, usersAPI.folowPost.bind(usersAPI), followSuccess)
};

export const unfollow = (userID) => async (dispatch) => {
    folowUnfollowFlow(dispatch, userID, usersAPI.followDelete.bind(usersAPI), unfollowSuccess)
};

export default UsersReducer