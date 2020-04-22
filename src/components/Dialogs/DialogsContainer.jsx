import { sendMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { reset } from 'redux-form';
import { getDialogsData, getMessagesData } from '../../redux/dialogs-selector';

let mapStateToProps = (state) => {
  return {
    dialogsData: getDialogsData(state),
    messagesData: getMessagesData(state)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => {
      dispatch(sendMessageActionCreator(message));
      dispatch(reset('Message'));
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)
(Dialogs);