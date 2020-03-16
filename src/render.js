import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText, sendMessage, updateNewMessageText } from './redux/state';


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={ state } 
        addPost={ addPost } 
        updateNewPostText={ updateNewPostText }
        sendMessage={ sendMessage }
        updateNewMessageText={ updateNewMessageText } / >
    </BrowserRouter>, document.getElementById('root'));
}

