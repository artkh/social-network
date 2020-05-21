import { loginAPI, capthaAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA = 'GET_CAPTCHA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captha: null
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
    case GET_CAPTCHA:
      {
        return {
          ...state,
          captcha: action.captcha
        }
      }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth} });
export const getCapthaSucces = (captcha) => ({ type: GET_CAPTCHA, captcha });

export const getLoginThunk = () => {
  return (dispatch) => {
    return loginAPI.getLogin().then(data => { //добавляя return возвращаем promise в app-reducer => initializeApp
      if(data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  }
}

export const loginAuthThunk = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    loginAPI.login(email, password, rememberMe, captcha).then(data => {
      if(data.resultCode === 0) {
        dispatch(getLoginThunk());
        dispatch(getCapthaSucces(null));
      } else {
        if(data.resultCode === 10) {
          dispatch(getCapthaThunk());
        }
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

export const getCapthaThunk = () => (dispatch) => {
  capthaAPI.getCaptha().then( data => {
    dispatch(getCapthaSucces(data.url))
  })
}

export default authReducer;