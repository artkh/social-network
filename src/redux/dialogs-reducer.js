const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogsData: [{
        id: 1,
        name: 'Andrew'
      },
      {
        id: 2,
        name: 'Sasha'
      },
      {
        id: 3,
        name: 'Sveta'
      },
      {
        id: 4,
        name: 'Valera'
      },
      {
        id: 5,
        name: 'Viktor'
      },
    ],
    messagesData: [{
        id: 1,
        name: 'Andrew',
        img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
        message: 'Hello!',
        class: 'inbox',
      },
      {
        id: 2,
        name: 'Me',
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png',
        message: 'Hello, friend!',
        class: 'outbox',
      },
      {
        id: 3,
        name: 'Me',
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png',
        message: 'What are you doing?',
        class: 'outbox',
      },
      {
        id: 4,
        name: 'Me',
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png',
        message: 'm?',
        class: 'outbox',
      },
      {
        id: 5,
        name: 'Andrew',
        img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
        message: 'learn',
        class: 'inbox',
      },
    ],
}

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SEND_MESSAGE:
      
      {
      let newMessage = {
        id: 6,
        name: 'Me',
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png',
        message: action.message,
        class: 'outbox',
      };
      let copyState = {...state};
      copyState.messagesData = [...state.messagesData];
      copyState.messagesData.push(newMessage);
      return copyState;
      }
    default:
      return state;
  }
}

export const sendMessageActionCreator = (message) => ({ type: SEND_MESSAGE, message});

export default dialogsReducer;