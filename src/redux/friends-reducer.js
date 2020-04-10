import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_COUNT_FRIENDS = 'SET_COUNT_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const FOLLOWING_IS_PROGRESS = 'FOLLOWING_IS_PROGRESS';

let initialState = {
  friendsData: [ ],
  totalCount: 0,
  pageSize: 5,
  currentPage: 1,
  isLoading: false,
  followingIsProgress: [],
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      {

        return {
          ...state,
          friendsData: state.friendsData.map( f => {
            if(f.id === action.userId) {
              return {...f, followed: true}
            }
            return f;
          })
        };

      }
    case UNFOLLOW:
      {

        return {
          ...state,
          friendsData: state.friendsData.map( f => {
            if(f.id === action.userId) {
              return {...f, followed: false}
            }
            return f;
          })
        };

      }
    case SET_FRIENDS:
      {
        return {
          ...state,
          friendsData: [ ...action.friendsData ]
        }
      }
    case SET_COUNT_FRIENDS:
      {
        return {
          ...state,
          totalCount: action.totalCount
        }
      }
    case SET_CURRENT_PAGE:
      {
        return {
          ...state,
          currentPage: action.page
        }
      }
    case TOGGLE_IS_LOADING: 
      {
        return {
          ...state,
          isLoading: action.isLoading
        }
      }
    case FOLLOWING_IS_PROGRESS:
      {
        return {
          ...state,
          followingIsProgress: action.isLoading ?
          [...state.followingIsProgress, action.userId] :
          state.followingIsProgress.filter(id => id != action.userId)
        }
      }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setFriends = (friendsData) => ({ type: SET_FRIENDS, friendsData });
export const setCountFriends = (totalCount) => ({ type: SET_COUNT_FRIENDS, totalCount });
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, page: pageNumber });
export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });
export const followingIsLoading = (isLoading, userId) => ({ type: FOLLOWING_IS_PROGRESS, isLoading, userId });

export const setFriendsThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsLoading(false));
      dispatch(setFriends(data.items));
      dispatch(setCountFriends(data.totalCount));
    });
  }
}

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(followingIsLoading(true, userId));
    usersAPI.followUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(userId));
        dispatch(followingIsLoading(false, userId));
      }
    })
  }
}

export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(followingIsLoading(true, userId));
    usersAPI.unfollowUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId));
        dispatch(followingIsLoading(false, userId));
      }
    })
  }
}

export default friendsReducer;