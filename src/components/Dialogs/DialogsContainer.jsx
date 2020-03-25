import { sendMessageActionCreator, changeMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {

//   let sendMessage = () => {
//     props.store.dispatch( sendMessageActionCreator() );
//   }
//   let changeMessage = (changeTextMessage) => {
//     let action = changeMessageActionCreator(changeTextMessage);
//     props.store.dispatch(action);
//   }
  
//   return <Dialogs
//     dialogsData={ props.store.getState().dialogsPage.dialogsData }
//     messagesData={ props.store.getState().dialogsPage.messagesData }
//     newMessageText={ props.store.getState().dialogsPage.newMessageText }
//     sendMessage={ sendMessage }
//     changeMessage={ changeMessage } />;
// }

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    changeMessage: (changeTextMessage) => {
      dispatch(changeMessageActionCreator(changeTextMessage));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;