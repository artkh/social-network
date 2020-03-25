import React from 'react';
import s from './../Friends.module.scss';

const Friend = (props) => {

  let subscribeText;
  if(props.subscribe) {
    subscribeText = 'follow';
  } else {
    subscribeText = 'unfollow';
  }

  return (
    <div className={s.friend} id={props.id}>
      <div className={s.shortInfo}>
        <div className={s.friend_image}>
          <img src={props.img} alt="" />
        </div>
        <div className={s.friend_button}>
          <button type="button">{subscribeText}</button>
        </div>
      </div>
      <div className={s.moreInfo}>
        <div className={s.friend_name}>
          <span>{props.firstName}</span>
          <span>{props.lastName}</span>
          <div className={s.friend_status}>
            <span>{props.status}</span>
          </div>
        </div>
        <div className={s.friend_country}>
          <span>{props.country}</span>
          <span>{props.town}</span>
        </div>
      </div>
    </div>
  );
}

export default Friend;