import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Posts/MyPosts';
import UserInfo from './UserInfo/UserInfo';
import MwImage from './MwImage/MwImage';

const Profile = () => {
  return (
    <main className={s.main}>
      <MwImage />
      <UserInfo />
      <MyPosts />
    </main>
  );
}

export default Profile;