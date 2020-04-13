import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
  postsData: [{
        id: 1,
        message: 'Hey, what are you doing?',
        like: 10
      },
      {
        id: 2,
        message: 'Hello World!',
        like: 20
      },
    ],
    newPostText: '',
    profileData: null,
    textStatus: null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: 
      {
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };
      let stateCopy = {...state};
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.unshift(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
      }
    case UPDATE_NEW_POST_TEXT: 
      {
      let stateCopy = {...state};
      stateCopy.newPostText = action.changeText;
      return stateCopy;
      }
    case SET_PROFILE:
      {
        return {
          ...state,
          profileData: action.profileData
        }
      }
    case SET_STATUS:
      {
        return {
          ...state,
          textStatus: action.textStatus
        }
      }
    case UPDATE_STATUS:
      {
        return {
          ...state,
          textStatus: action.changeStatus
        }
      }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (changeText) => ({ type: UPDATE_NEW_POST_TEXT, changeText: changeText });
export const setProfile = (profileData) => ({ type: SET_PROFILE, profileData });
export const setStatus = (textStatus) => ({ type: SET_STATUS, textStatus });
export const updateStatus = (changeStatus) => ({ type: UPDATE_STATUS, changeStatus})

export const getProfileThunk = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then(data => {
      dispatch(setProfile(data));
    })
  }
}

export const getStatusThunk = (userId) => {
  return (dispatch) => {
    usersAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data));
    })
  }
}

export const updateStatusThunk = (changeStatus) => {
  return (dispatch) => {
    usersAPI.updateStatus(changeStatus).then(data => {
      if(data.resultCode === 0) {
        dispatch(updateStatus(changeStatus))
      }
    })
  }
}

export default profileReducer;