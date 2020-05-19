import React, { useState, useEffect} from 'react';
import s from './UserInfo.module.css';
import StatusUserWithHooks from './StatusUserWithHooks';
import UserDataReduxForm from './UserDataForm';

const UserInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  let changePhoto = (e) => {
    if(e.target.files.length <= 1) {
      props.savePhoto(e.target.files[0]);
    }
  }

  let activatedEditMode = () => {
    setEditMode(true);
  }

  useEffect( () => {
    setEditMode(props.errorProfileForm)
  }, [props.errorProfileForm]);

  let onSubmit = (dataForm) => {
    props.updateProfile(dataForm);
    if (!props.errorProfileForm) {
      setEditMode(false);
    }
  }

  

  return (
    <div className={s.main__user} key={props.id}>

      <div className={s.main__user_image}>
        <img src={!props.smallPhoto ? 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png' :
          props.smallPhoto} alt="" />
        {!props.isOwner ? 
          <div className={s.main__user_image_buttons}>
            <input type="file" id="changePhoto" onChange={changePhoto} className={s.main__user_image_input} />
            <label className={s.main__user_image_label} htmlFor="changePhoto">change</label>
          </div> : null}
      </div>

      <div className={s.main__user_info}>

        <div className={s.name}>
          {props.fullName}
        </div>

        <div className={s.status}>
          <StatusUserWithHooks textStatus={props.textStatus} updateStatus={props.updateStatus} />
        </div>

        <div className={s.contacts}>
          {!editMode ?
            <UserInfoData aboutMe={props.aboutMe} lookingForAJob={props.lookingForAJob}
              lookingForAJobDescription={props.lookingForAJobDescription} contacts={props.contacts}
              activatedEditMode={activatedEditMode} isOwner={props.isOwner} /> :
            <UserDataReduxForm onSubmit={onSubmit} initialValues={props} contacts={props.contacts} />}
        </div>

      </div>
    </div>
  );
}

const UserInfoData = (props) => {
  return (
    <div>
      {!props.isOwner ? <button onClick={props.activatedEditMode}>edit</button> : null}
      <div>
        About me: <span>{props.aboutMe}</span>
      </div>
      <div>
        Job: <span>{props.lookingForAJob ? 'in search...' : 'work'}</span>
      </div>
      <div>
        Job description: <span>{props.lookingForAJobDescription}</span>
      </div>
      {Object.keys(props.contacts).map(c => {
        return <Contacts key={c} contactsTitle={c} contactsValue={props.contacts[c]} /> //return не забывать ставить!
      })}
    </div>
  )
}

const Contacts = (props) => {
  return (
    <div>
      {props.contactsTitle}: <span>{props.contactsValue}</span>
    </div>
  )
}

export default UserInfo;