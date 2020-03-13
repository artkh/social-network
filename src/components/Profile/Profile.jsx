import React from 'react';
import s from './Profile.module.scss';
import Posts from './Posts/Posts';
import UserInfo from './UserInfo/UserInfo';
import MwImage from './MwImage/MwImage';

const Profile = (props) => {

  // let postsData = [
  //   { id: 1, message: 'Hey, what are you doing?', like: 10 },
  //   { id: 2, message: 'Hello World!', like: 20 },
  // ];

  return (
    <div className={s}>
      <MwImage />
      <UserInfo />
      <Posts data={props.data} />
    </div>
  );
}

export default Profile;