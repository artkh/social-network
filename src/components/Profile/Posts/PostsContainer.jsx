import React from 'react';
import Posts from './Posts';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

// const PostsContainer = (props) => {

//   let addPost = () => {
//     props.store.dispatch( addPostActionCreator() );
//   }

//   let updateNewPostText = (changeText) => {
//     let action = updateNewPostTextActionCreator(changeText);
//     props.store.dispatch(action)
//   }

//   return <Posts 
//     postsData={props.store.getState().profilePage.postsData}
//     updateNewPostText={ updateNewPostText }
//     addPost= { addPost }
//     newPostText= { props.store.getState().profilePage.newPostText } />;
// }

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (changeText) => {
      let action = updateNewPostTextActionCreator(changeText);
      dispatch(action);
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;