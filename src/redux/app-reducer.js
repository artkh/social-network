import { getLoginThunk } from "./auth-reducer";

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case INITIALIZED_SUCCES: {
      return {
        ...state,
        initialized: true
      }
    }
    default:
      return state;
  }
}

export const initializedSucces = () => ({ type: INITIALIZED_SUCCES });

export const initializeAppThunk = () => (dispatch) => {
  let promise = dispatch(getLoginThunk());
  Promise.all([promise]).then(() => { //когда массив промисов зарезолвится, тогда then выполнит функцию. Если один промис можно так promise.then...
    dispatch(initializedSucces());
  } )
}

export default appReducer;