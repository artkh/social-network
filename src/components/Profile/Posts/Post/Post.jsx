import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
  return (
    <div className={s.posts_item}>
      <a href="#a" className={s.user_image}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png" alt="" />
      </a>
      <div className={s.message}>
        {props.message}
      </div>
      <div className={s.like}>
        like: {props.like}
      </div>
    </div>
  );
}

export default Post;