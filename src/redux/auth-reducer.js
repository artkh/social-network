import { loginAPI } from "../api/api";

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
    loginAPI.getLogin().then(data => {
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