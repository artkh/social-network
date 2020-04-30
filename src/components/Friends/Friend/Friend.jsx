import React from 'react';
import s from '../Friends.module.scss';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {

  let onFollow = (userId) => {
    props.followThunk(userId);
  }

  let onUnFollow = (userId) => {
    props.unfollowThunk(userId);
  }

  return (
    <div>
      {
        props.friendsData.map(f =>
          <div className={s.friend} key={f.id}>
            <div className={s.shortInfo}>
              <div className={s.friend_image}>
                <NavLink to={`/profile/${f.id}`}>
                  <img src={f.photos.small != null ? f.photos.small : 'https://klike.net/uploads/posts/2019-03/medium/1551511829_46.jpg'} alt="" />
                </NavLink>
              </div>
              <div className={s.friend_button}>
                {f.followed ?
                  <button type="button" disabled={props.followingIsProgress.some(id => id === f.id)} onClick={() => { onUnFollow(f.id) }}>unfollow</button> :
                  <button type="button" disabled={props.followingIsProgress.some(id => id === f.id)} onClick={() => { onFollow(f.id) }}>follow</button>}
              </div>
            </div>
            <div className={s.moreInfo}>
              <div className={s.friend_name}>
                <span>{f.name}</span>
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
}

export default Friend;