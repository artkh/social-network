import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLength15, required } from '../../utilites/validatorsForm/validators';
import { Textarea } from '../../elements/form/FormsControl';

const PostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={'postText'} placeholder={'new post...'}
          validate={[required, maxLength15]} />
      </div>
      <div>
        <button type="submit">send</button>
      </div>
    </form>
  )
}

const PostReduxForm = reduxForm({ form: 'Post' })(PostForm);

const Posts = (props) => {

  let post = props.postsData.map( p => <Post id={p.id} message={p.message} like={p.like} /> );

  const onSubmit = (dataForm) => {
    props.addPost(dataForm.postText);
  }

  return (
    <div className={s.main__posts}>
      <div className={s.main__posts_title}>
        My Posts
      </div>
      <div className={s.main__posts_form}>
        <PostReduxForm onSubmit={onSubmit} className={s.text} />
      </div>
      { post }
    </div>
  );
}

export default Posts;