import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCES = 'SAVE_PHOTO_SUCCES';
const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR';


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
  profileData: null,
  textStatus: null,
  errorProfileForm: false
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: 
      {
      let newPost = {
        id: 5,
        message: action.postText,
        like: 0,
      };
      let stateCopy = {...state};
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.unshift(newPost);
      stateCopy.newPostText = '';
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
    case DELETE_POST:
      {
        return {
          ...state,
          postsData: state.postsData.filter(p => p.id !== action.postId)
        }
      }
    case SAVE_PHOTO_SUCCES:
      {
        let stateCopy = {...state};
        stateCopy.profileData = {...stateCopy.profileData};
        stateCopy.profileData.photos = action.photo;
        return stateCopy;
      }
    case UPDATE_PROFILE_ERROR:
      {
        return {
          ...state,
          errorProfileForm: action.error
        }
      }
    default:
      return state;
  }
}

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText });
export const setProfile = (profileData) => ({ type: SET_PROFILE, profileData });
export const setStatus = (textStatus) => ({ type: SET_STATUS, textStatus });
export const updateStatus = (changeStatus) => ({ type: UPDATE_STATUS, changeStatus});
export const deletePost = (postId) => ({ type: DELETE_POST, postId});
export const savePhotoSucces = (photo) => ({ type: SAVE_PHOTO_SUCCES, photo});
export const updateProfileError = (error) => ({ type: UPDATE_PROFILE_ERROR , error});


export const getProfileThunk = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(setProfile(data));
}

// export const getProfileThunk = (userId) => {
//   return (dispatch) => {
//     profileAPI.getProfile(userId).then(data => {
//       dispatch(setProfile(data));
//     })
//   }
// }

export const getStatusThunk = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
}

export const updateStatusThunk = (changeStatus) => async (dispatch) => {
  let data = await profileAPI.updateStatus(changeStatus);
  if (data.resultCode === 0) {
    dispatch(updateStatus(changeStatus))
  }
}

export const savePhotoThunk = (photo) => async (dispatch) => {
  let data = await profileAPI.savePhoto(photo);
  if (data.resultCode === 0) {
    dispatch(savePhotoSucces(data.data.photos))
  }
}

export const updateProfileThunk = (newDataProfile) => async (dispatch, getState) => {

    let userId = getState().auth.userId;
    let data = await profileAPI.updateProfile(newDataProfile);

    if (data.resultCode === 0) {
      dispatch(updateProfileError(false));
      dispatch(getProfileThunk(userId));
    } else {
      dispatch(updateProfileError(true));
      let message = data.messages.length > 0 ? data.messages[0] : 'some error';
      dispatch( stopSubmit("UserProfile", {_error: message}) );
    }
}

export default profileReducer;