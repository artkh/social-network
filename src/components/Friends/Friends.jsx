import React from 'react';
import s from './Friends.module.scss';

const Friends = (props) => {

  return (
    <div className={s.friends}>
      {
        props.friendsData.map( f => 
          <div className={s.friend} key={f.id}>
            <div className={s.shortInfo}>
              <div className={s.friend_image}>
                <img src={f.img} alt="" />
              </div>
              <div className={s.friend_button}>
                {f.subscribe ? 
                <button type="button" onClick={ () => {props.unfollow(f.id)} }>follow</button> :
                <button type="button" onClick={ () => {props.follow(f.id)} }>unfollow</button>}
              </div>
            </div>
            <div className={s.moreInfo}>
              <div className={s.friend_name}>
                <span>{f.firstName}</span>
                <span>{f.lastName}</span>
                <div className={s.friend_status}>
                  <span>{f.status}</span>
                </div>
              </div>
              <div className={s.friend_country}>
                <span>{f.country}</span>
                <span>{f.town}</span>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
  
  // let friendsItem = props.friendsData.map(f => <Friend id={f.id}
  //   firstName={f.firstName}
  //   lastName={f.lastName}
  //   img={f.img}
  //   country={f.country}
  //   town={f.town}
  //   status={f.status}
  //   subscribe={f.subscribe} />);
  
  // return (
  //   <div className={s.friends}>
  //     { friendsItem }
  //   </div>
  // );
}

export default Friends;