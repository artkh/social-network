import React from 'react';
import s from './Friends.module.scss';
import Friend from './Friend/Friend';

const Friends = (props) => {
  
  let friendsItem = props.friendsData.map(f => <Friend id={f.id} name={f.name} img={f.img} />);
  
  return (
    <div className={s.friends}>
      { friendsItem }
    </div>
  );
}

export default Friends;