import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.main__posts_item}>
      <a href="#a" className={s.user_image}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png" alt="" />
      </a>
      <div className={s.message}>
        Hey, what are you doing?
          </div>
      <div>sdsds</div>
    </div>
  );
}

export default Post;