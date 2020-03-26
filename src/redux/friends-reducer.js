const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';

let initialState = {
  friendsData: [ ]
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
          friendsData: [ ...state.friendsData, ...action.friendsData ]
        }
      }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setFriendsAC = (friendsData) => ({ type: SET_FRIENDS, friendsData });

export default friendsReducer;