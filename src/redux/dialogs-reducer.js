const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        name: 'Me',
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png',
        message: state.newMessageText,
        class: 'outbox',
      };
      state.messagesData.push(newMessage);
      state.newMessageText = '';
      return state;
      case UPDATE_NEW_MESSAGE_TEXT:
        state.newMessageText = action.changeTextMessage;
        return state;
    default:
      return state;
  }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE});
export const changeMessageActionCreator = (changeTextMessage) => ({ type: UPDATE_NEW_MESSAGE_TEXT, changeTextMessage: changeTextMessage});

export default dialogsReducer;