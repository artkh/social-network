import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({ 
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;
window.store = store;