import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {

  // let postsData = [
  //   { id: 1, message: 'Hey, what are you doing?', like: 10},
  //   { id: 2, message: 'Hello World!', like: 20 },
  // ];

  let post = props.data.map( p => <Post id={p.id} message={p.message} like={p.like} /> );

  return (
    <div className={s.main__posts}>
      <div className={s.main__posts_title}>
        My Posts
        </div>
      <form action="" className={s.main__posts_form}>
        <textarea name="" id="" className={s.text} placeholder="new post..."></textarea>
        <button type="submit" className={s.btn}>send</button>
      </form>
      { post }
    </div>
  );
}

export default Posts;