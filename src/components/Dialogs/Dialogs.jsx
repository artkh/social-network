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
    <div className={s.message}>
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


  return (
    <div className={s.dialogs}>
      <h1>
        Dialogs
            </h1>
      <div className={s.dialogs_inner}>
        <div className={s.user_item}>
          <DialogItem name='Andrew' id='1' />
          <DialogItem name='Sasha' id='2' />
          <DialogItem name='Sveta' id='3' />
          <DialogItem name='Valera' id='4' />
          <DialogItem name='Viktor' id='5' />
          <DialogItem name='Petr' id='6' />
          <DialogItem name='Alex' id='7' />
        </div>
        <div className={s.messages}>
          <Message name='Andrew' img='https://ufolabs.net/data/attachments/0/261-ed89b82f7ab98db17d82ee9e15195971.jpg' message='Hohoohhoh' />
          <Message name='Me' img='https://ufolabs.net/data/attachments/0/261-ed89b82f7ab98db17d82ee9e15195971.jpg' message='Kokokkokko' />
        </div>
      </div>
    </div>
  );
}

export default Dialogs;