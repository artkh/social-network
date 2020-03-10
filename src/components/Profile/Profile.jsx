import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './Posts/MyPosts';
import UserInfo from './UserInfo/UserInfo';
import MwImage from './MwImage/MwImage';

const Profile = () => {
  return (
    <div className={s}>
      <MwImage />
      <UserInfo />
      <MyPosts />
    </div>
  );
}

export default Profile;