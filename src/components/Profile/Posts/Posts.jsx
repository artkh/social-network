import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const PostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'} name={'postText'} placeholder={'new post...'}
          value={props.newPostText} onChange={props.onPostChange}
          id="" className={s.text} />
      </div>
      <div>
        <button type="submit" className={s.btn} onClick={props.onAddPost}>send</button>
      </div>
    </form>
  )
}

const PostReduxForm = reduxForm({ form: 'Post' })(PostForm);

const Posts = (props) => {

  let post = props.postsData.map( p => <Post id={p.id} message={p.message} like={p.like} /> );

  // let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    // let changeText = newPostElement.current.value;
    let changeText = e.target.value;
    props.updateNewPostText(changeText);
  }

  const onSubmit = (dataForm) => {
    console.log(dataForm);
  }

  return (
    <div className={s.main__posts}>
      <div className={s.main__posts_title}>
        My Posts
      </div>
      <div className={s.main__posts_form}>
        <PostReduxForm newPostText={props.newPostText} onPostChange={onPostChange}
          onAddPost={onAddPost} onSubmit={onSubmit} />
        {/* <textarea name="" id="" className={s.text} placeholder="new post..." ref={newPostElement} value={props.newPostText} onChange={ onPostChange } />
        <button type="button" className={s.btn} onClick={ onAddPost }>send</button> */}
      </div>
      { post }
    </div>
  );
}

export default Posts;