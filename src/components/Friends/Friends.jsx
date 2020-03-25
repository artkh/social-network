import React from 'react';
import s from './Friends.module.scss';
import Friend from './Friend/Friend';

const Friends = (props) => {
  
  let friendsItem = props.friendsData.map(f => <Friend id={f.id}
    firstName={f.firstName}
    lastName={f.lastName}
    img={f.img}
    country={f.country}
    town={f.town}
    status={f.status}
    subscribe={f.subscribe} />);
  
  return (
    <div className={s.friends}>
      { friendsItem }
    </div>
  );
}

export default Friends;