import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DIalogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElement = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
  let messagesElements = props.messagesData.map( m => <Message id={m.id} name={m.name} img={m.img} message={m.message} /> );

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
      </div>
    </div>
  );
}

export default Dialogs;