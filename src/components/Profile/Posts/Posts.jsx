import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

// class Posts extends React.Component {

//   constructor(props) {
//     super(props);

//     post = this.props.postsData.map(p => <Post id={p.id} message={p.message} like={p.like} />);

//     newPostElement = React.createRef();
//     onAddPost = () => {
//       this.props.addPost();
//     }

//     onPostChange = () => {
//       changeText = newPostElement.current.value;
//       this.props.updateNewPostText(changeText);
//     }

//   }

//   render() {
//     return (
//       <div className={s.main__posts}>
//         <div className={s.main__posts_title}>
//           My Posts
//       </div>
//         <div className={s.main__posts_form}>
//           <textarea name="" id="" className={s.text} placeholder="new post..." ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
//           <button type="button" className={s.btn} onClick={onAddPost}>send</button>
//         </div>
//         {post}
//       </div>
//     )
//   }
// }

const Posts = (props) => {

  let post = props.postsData.map( p => <Post id={p.id} message={p.message} like={p.like} /> );

  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let changeText = newPostElement.current.value;
    props.updateNewPostText(changeText);
  }

  return (
    <div className={s.main__posts}>
      <div className={s.main__posts_title}>
        My Posts
      </div>
      <div className={s.main__posts_form}>
        <textarea name="" id="" className={s.text} placeholder="new post..." ref={newPostElement} value={props.newPostText} onChange={ onPostChange } />
        <button type="button" className={s.btn} onClick={ onAddPost }>send</button>
      </div>
      { post }
    </div>
  );
}

export default Posts;