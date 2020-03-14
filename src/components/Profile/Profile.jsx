import React from 'react';
import s from './Profile.module.scss';
import Posts from './Posts/Posts';
import UserInfo from './UserInfo/UserInfo';
import MwImage from './MwImage/MwImage';

const Profile = (props) => {

  return (
    <div className={s}>
      <MwImage />
      <UserInfo />
      <Posts postsData={props.postsData} />
    </div>
  );
}

export default Profile;