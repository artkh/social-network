import React from 'react';
import s from './Friends.module.scss';

const Friends = (props) => {

  if(props.friendsData.length === 0) {
    props.setFriends([
      {
        id: 1,
        firstName: 'Andrew',
        lastName: 'K.',
        img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
        country: 'Russia',
        town: 'Moscow',
        status: 'I am looking for a Job right now...',
        subscribe: true
      },
      {
        id: 2,
        firstName: 'Sveta',
        lastName: 'D.',
        img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
        country: 'Belarus',
        town: 'Minsk',
        status: 'I am so pretty',
        subscribe: false
      },
      {
        id: 3,
        firstName: 'Olya',
        lastName: 'L.',
        img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
        country: 'Ukraine',
        town: 'Kiev',
        status: 'I love watch movie',
        subscribe: true
      },
      {
        id: 4,
        firstName: 'Vika',
        lastName: 'S.',
        img: 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg',
        country: 'Russia',
        town: 'St Peterburg',
        status: 'I am free',
        subscribe: false
      },
    ]);
  }

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
                <button type="button" onClick={ () => {props.unfollow(f.id)} }>unfollow</button> :
                <button type="button" onClick={ () => {props.follow(f.id)} }>follow</button>}
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