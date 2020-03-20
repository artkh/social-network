import React from 'react';
import { sendMessageActionCreator, changeMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

  let sendMessage = () => {
    props.store.dispatch( sendMessageActionCreator() );
  }
  let changeMessage = (changeTextMessage) => {
    let action = changeMessageActionCreator(changeTextMessage);
    props.store.dispatch(action);
  }
  
  return <Dialogs
    dialogsData={ props.store.getState().dialogsPage.dialogsData }
    messagesData={ props.store.getState().dialogsPage.messagesData }
    newMessageText={ props.store.getState().dialogsPage.newMessageText }
    sendMessage={ sendMessage }
    changeMessage={ changeMessage } />;
}

export default DialogsContainer;