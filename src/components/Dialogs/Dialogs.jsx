import React from 'react';
import s from './Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={s.name}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={s.message} id={props.id}>
      <div className={s.user_info}>
        <div className={s.image}>
          <img src={"" + props.img} alt="" />
        </div>
        <div className={s.name}>
          {props.name}
        </div>
      </div>
      <div className={s.user_message}>
        {props.message}
      </div>
    </div>
  );
}

const Dialogs = (props) => {

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

  let dialogsElement = dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
  let messagesElements = messagesData.map( m => <Message id={m.id} name={m.name} img={m.img} message={m.message} /> );

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