const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_COUNT_FRIENDS = 'SET_COUNT_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
  friendsData: [ ],
  totalCount: 0,
  pageSize: 5,
  currentPage: 1
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      {

        return {
          ...state,
          friendsData: state.friendsData.map( f => {
            if(f.id === action.userId) {
              return {...f, subscribe: true}
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
              return {...f, subscribe: false}
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
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setFriendsAC = (friendsData) => ({ type: SET_FRIENDS, friendsData });
export const setCountFriendsAC = (totalCount) => ({ type: SET_COUNT_FRIENDS, totalCount });
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });

export default friendsReducer;