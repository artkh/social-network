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
        lookingForAJob={props.profileData.lookingForAJob}
        lookingForAJobDescription={props.profileData.lookingForAJobDescription}
        fullName={props.profileData.fullName}
        id={props.profileData.userId}
        smallPhoto={props.profileData.photos.small}
        textStatus={props.textStatus}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        updateProfile={props.updateProfile}
        authUserId={props.authUserId}
        errorProfileForm={props.errorProfileForm} />
      <PostsContainer />
    </div>
  );
}

export default Profile;