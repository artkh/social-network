import React from 'react';
import s from './../Friends.module.scss';

const Friend = (props) => {

  return (
    <a href="#a" className={s.friend} id={props.id}>
      <img src={props.img} alt="" className={s.friend_image} />
      <div className={s.name}>
        {props.name}
      </div>
    </a>
  );
}

export default Friend;