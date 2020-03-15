import React from 'react';
import s from './Message.module.scss';

const Message = (props) => {
  return (
    <div className={`${s.message} ${props.class}`} id={props.id}>
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

export default Message;