import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    { id: 1, message: 'Hey, what are you doing?', like: 10 },
    { id: 2, message: 'Hello World!', like: 20 },
  ];

  let dialogsData = [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Sasha' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Valera' },
    { id: 5, name: 'Viktor' },
  ]

  let messagesData = [
    { id: 1, name: 'Andrew', img: 'https://ufolabs.net/data/attachments/0/261-ed89b82f7ab98db17d82ee9e15195971.jpg', message: 'Hohoohhoh' },
    { id: 2, name: 'Me', img: 'https://ufolabs.net/data/attachments/0/261-ed89b82f7ab98db17d82ee9e15195971.jpg', message: 'Kokokkokko' }
  ]

ReactDOM.render(<App postsData={ postsData } dialogsData={ dialogsData } messagesData={ messagesData } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
