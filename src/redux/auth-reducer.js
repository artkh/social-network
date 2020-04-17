import { loginAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const AUTH_LOGIN = 'AUTH_LOGIN';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  authData: {
    email: '',
    password: '',
    rememberMe: false,
    // captcha: false,
  }
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      {
        return {
          ...state,
          ...action.data,
          isAuth: true
        }
      }
    case AUTH_LOGIN:
      {
        return {
          ...state,
          ...state.authData,
          email: action.email,
          password: action.password,
          rememberMe: action.rememberMe,
        }
      }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} });
export const authLogin = (email, password, rememberMe) => ({ type: AUTH_LOGIN, email, password, rememberMe });

export const getLoginThunk = () => {
  return (dispatch) => {
    loginAPI.getLogin().then(data => {
      if(data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  }
}

export const postAuthThunk = (email, password, rememberMe) => {
  return (dispatch) => {
    loginAPI.postAuthorized(email, password, rememberMe).then(data => {
      // if(data.resultCode === 0) {
        dispatch(authLogin(email, password, rememberMe));
      // }
    })
  }
}

export default authReducer;