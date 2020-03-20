import React from 'react';
import Posts from './Posts';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';

const PostsContainer = (props) => {

  let addPost = () => {
    props.store.dispatch( addPostActionCreator() );
  }

  let updateNewPostText = (changeText) => {
    let action = updateNewPostTextActionCreator(changeText);
    props.store.dispatch(action)
  }

  return <Posts 
    postsData={props.store.getState().profilePage.postsData}
    updateNewPostText={ updateNewPostText }
    addPost= { addPost }
    newPostText= { props.store.getState().profilePage.newPostText } />;
}

export default PostsContainer;