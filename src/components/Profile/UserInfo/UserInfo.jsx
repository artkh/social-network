import React from 'react';
import s from './UserInfo.module.css';
import StatusUserWithHooks from './StatusUserWithHooks';

const UserInfo = (props) => {

  let changePhoto = (e) => {
    if(e.target.files.length <= 1) {
      props.savePhoto(e.target.files[0]);
    }
    
  }

  return (
    <div className={s.main__user} key={props.id}>
      <div className={s.main__user_image}>
        <img src={!props.smallPhoto ? 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png' :
          props.smallPhoto} alt="" />
        {!props.isOwner ? <div><input type="file" id="changePhoto" onChange={changePhoto} className={s.main__user_image_input} />
          <label className={s.main__user_image_label} for="changePhoto">change</label></div> : null}
      </div>
      <div className={s.main__user_info}>
        <div className={s.name}>
          {props.fullName}
        </div>
        <div className={s.status}>
          <StatusUserWithHooks textStatus={props.textStatus} updateStatus={props.updateStatus} />
        </div>
        <div className={s.aboutMe}>
          About me: {props.aboutMe}
        </div>
        <div className={s.jobStatus}>
          Job: {props.lookingJob ? 'search...' : 'work!'}
        </div>
        <div className={s.jobDesc}>
          Job description: {props.lookingJobDesc}
        </div>
        <div className={s.contacts}>
          <div>
            github: {props.contacts.github}
          </div>
          <div>
            vk: {props.contacts.vk}
          </div>
          <div>
            facebook: {props.contacts.facebook}
          </div>
          <div>
            instagram: {props.contacts.instagram}
          </div>
          <div>
            twitter: {props.contacts.twitter}
          </div>
          <div>
            website: {props.contacts.website}
          </div>
          <div>
            youtube: {props.contacts.youtube}
          </div>
          <div>
            mainLink: {props.contacts.mainLink}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;