import React from 'react';
import s from './../Friends.module.scss';

const Friend = (props) => {

  return (
    <a href="#a" className={s.friend} id={props.id}>
      <div className={s.friend_image}>
        <img src={props.img} alt="" />
      </div>
      <div className={s.name}>
        {props.name}
      </div>
    </a>
  );
}

export default Friend;