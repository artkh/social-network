import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.main__posts}>
      <div className={s.main__posts_title}>
        My Posts
        </div>
      <form action="" className={s.main__posts_form}>
        <textarea name="" id="" className={s.text} placeholder="new post..."></textarea>
        <button type="submit" className={s.btn}>send</button>
      </form>
      <Post />
    </div>
  );
}

export default MyPosts;