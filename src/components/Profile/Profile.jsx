import React from 'react';
import s from './Profile.module.scss';
import UserInfo from './UserInfo/UserInfo';
import MwImage from './MwImage/MwImage';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {

  return (
    <div className={s}>
      <MwImage />
      <UserInfo />
      <PostsContainer
        store= {props.store} />
    </div>
  );
}

export default Profile;