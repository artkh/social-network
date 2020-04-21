import { loginAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      {
        return {
          ...state,
          ...action.data,
          // isAuth: true
        }
      }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth} });

export const getLoginThunk = () => {
  return (dispatch) => {
    return loginAPI.getLogin().then(data => { //возвращаем promise в initializeApp
      if(data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  }
}

export const loginAuthThunk = (email, password, rememberMe) => {
  return (dispatch) => {
    loginAPI.login(email, password, rememberMe).then(data => {
      if(data.resultCode === 0) {
        dispatch(getLoginThunk());
      } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'some error';
        dispatch( stopSubmit("Login", {_error: message}) );
      }
    })
  }
}

export const logoutAuthThunk = () => (dispatch) => {
  loginAPI.logout().then(data => {
    if(data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  })
}

export default authReducer;