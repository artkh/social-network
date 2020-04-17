import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DIalogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'message'} component={'textarea'} placeholder={'new message...'} />
      </div>
      <div>
        <button type={'submit'}>Send</button>
      </div>
    </form>
  )
}

const MessageReduxForm = reduxForm({ form: 'Message' })(MessageForm);

const Dialogs = (props) => {
  
  let dialogsElement = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
  let messagesElements = props.messagesData.map( m => <Message id={m.id} name={m.name} img={m.img} message={m.message} class={m.class} style={m.style} /> );

  let addNewMessage = (dataForm) => {
    props.sendMessage(dataForm.message);
  }
  
  return (
    <div className={s.dialogs}>
      <h1>
        Dialogs
      </h1>
      <div className={s.dialogs_inner}>
        <div className={s.user_item}>
          { dialogsElement }
        </div>
        <div className={s.messages}>
          { messagesElements }
        </div>
        <div className={s.newMessage}>
          <MessageReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
      
    </div>
  );
}

export default Dialogs;