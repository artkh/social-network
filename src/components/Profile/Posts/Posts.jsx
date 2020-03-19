import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'

const Posts = (props) => {
  
  let post = props.postsData.map( p => <Post id={p.id} message={p.message} like={p.like} /> );

  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch( addPostActionCreator() );
  }

  let updateNewPostText = () => {
    let changeText = newPostElement.current.value;
    props.dispatch( updateNewPostTextActionCreator(changeText) );
  }

  return (
    <div className={s.main__posts}>
      <div className={s.main__posts_title}>
        My Posts
      </div>
      <div className={s.main__posts_form}>
        <textarea name="" id="" className={s.text} placeholder="new post..." ref={newPostElement} value={props.newPostText} onChange={ updateNewPostText } />
        <button type="button" className={s.btn} onClick={ addPost }>send</button>
      </div>
      { post }
    </div>
  );
}

export default Posts;