import React from 'react';
import s from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className={s.main__user}>
      <div className={s.main__user_image}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png" alt="" />
      </div>
      <div className={s.main__user_info}>
        <div className={s.name}>
          Petr K.
            </div>
        <div className={s.birthday}>
          Date of Birth: 1 january
            </div>
        <div className={s.city}>
          City: Moscow
            </div>
        <div className={s.education}>
          Education: MGU
            </div>
        <div className={s.site}>
          Web-site: https://www.google.com
            </div>
      </div>
    </div>
  );
}

export default UserInfo;