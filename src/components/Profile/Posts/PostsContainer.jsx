import Posts from './Posts';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText));
      dispatch(reset('Post'));
    },
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;