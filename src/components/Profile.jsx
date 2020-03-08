import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <main className={s.main}>
      <div className={s.main__mw_image}>
        <img src="https://незабываемая.москва/uploads/posts/ekskursiya_na_smotrovuyu_ploshchadku_panorama_360_2.jpg" alt="" />
      </div>
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
      <div className={s.main__posts}>
        <div className={s.main__posts_title}>
          My Posts
        </div>
        <form action="" className={s.main__posts_form}>
          <textarea name="" id="" className={s.text} placeholder="new post..."></textarea>
          <button type="submit" className={s.btn}>send</button>
        </form>
        <div className={s.main__posts_item}>
          <a href="#a" className={s.user_image}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png" alt="" />
          </a>
          <div className={s.message}>
            Hey, what are you doing?
          </div>
        </div>
        <div className={s.main__posts_item}>
          <a href="#a" className={s.user_image}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png" alt="" />
          </a>
          <div className={s.message}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut incidunt eligendi ratione repudiandae blanditiis, alias minus quaerat ullam temporibus cum doloremque quibusdam voluptate dolorum. Iste quibusdam repellat reiciendis dolore.
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;