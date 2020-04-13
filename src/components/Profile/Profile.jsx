import React from 'react';
import s from './Profile.module.scss';
import UserInfo from './UserInfo/UserInfo';
import MwImage from './MwImage/MwImage';
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../elements/Preloader';

const Profile = (props) => {

  if(!props.profileData) {
    return <Preloader />
  }

  return (
    <div className={s}>
      <MwImage largePhoto={props.profileData.photos.large} />
      <UserInfo aboutMe={props.profileData.aboutMe}
        contacts={props.profileData.contacts}
        lookingJob={props.profileData.lookingForAJob}
        lookingJobDesc={props.profileData.lookingForAJobDescription}
        fullName={props.profileData.fullName}
        id={props.profileData.userId}
        smallPhoto={props.profileData.photos.small}
        textStatus={props.textStatus} />
      <PostsContainer />
    </div>
  );
}

export default Profile;