const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  friendsData: [{
      id: 1,
      firstName: 'Andrew',
      lastName: 'K.',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
      country: 'Russia',
      town: 'Moscow',
      status: 'I am looking for a Job right now...',
      subscribe: true
    },
    {
      id: 2,
      firstName: 'Sveta',
      lastName: 'D.',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
      country: 'Belarus',
      town: 'Minsk',
      status: 'I am so pretty',
      subscribe: false
    },
    {
      id: 3,
      firstName: 'Olya',
      lastName: 'L.',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
      country: 'Ukraine',
      town: 'Kiev',
      status: 'I love watch movie',
      subscribe: true
    },
    {
      id: 4,
      firstName: 'Vika',
      lastName: 'S.',
      img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
      country: 'Russia',
      town: 'St Peterburg',
      status: 'I am free',
      subscribe: false
    },
  ]
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
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export default friendsReducer;