import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {

  let post = props.postsData.map( p => <Post id={p.id} message={p.message} like={p.like} /> );
  
  let newPostElement = React.createRef();
  let addPost = () => {
    let post = newPostElement.current.value;
    props.addPost(post);
  }

  return (
    <div className={s.main__posts}>
      <div className={s.main__posts_title}>
        My Posts
        </div>
      <form action="" className={s.main__posts_form}>
        <textarea name="" id="" className={s.text} placeholder="new post..." ref={ newPostElement }></textarea>
        <button  className={s.btn} onClick={ addPost }>send</button>
      </form>
      { post }
    </div>
  );
}

export default Posts;