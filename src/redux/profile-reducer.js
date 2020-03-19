const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [{
        id: 1,
        message: 'Hey, what are you doing?',
        like: 10
      },
      {
        id: 2,
        message: 'Hello World!',
        like: 20
      },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };
      state.postsData.unshift(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.changeText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (changeText) => ({ type: UPDATE_NEW_POST_TEXT, changeText: changeText });

export default profileReducer;