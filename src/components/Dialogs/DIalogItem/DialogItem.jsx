import React from 'react';
import s from './../Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={s.name}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;