const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_COUNT_FRIENDS = 'SET_COUNT_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
  friendsData: [ ],
  totalCount: 0,
  pageSize: 5,
  currentPage: 1,
  isLoading: false
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

export default friendsReducer;