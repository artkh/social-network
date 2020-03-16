import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DIalogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  
  let dialogsElement = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
  let messagesElements = props.messagesData.map( m => <Message id={m.id} name={m.name} img={m.img} message={m.message} class={m.class} /> );
  
  let newMessage = React.createRef();
  let sendMessage = () => {
    props.sendMessage();
  }
  let changeMessage = () => {
    let changeTextMessage = newMessage.current.value;
    props.updateNewMessageText(changeTextMessage);
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
          <textarea name="" id="" placeholder="new message..." ref={newMessage} onChange={ changeMessage } value={props.newMessageText} />
          <button onClick={ sendMessage }>Send</button>
        </div>
      </div>
      
    </div>
  );
}

export default Dialogs;