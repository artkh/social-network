import { connect } from 'react-redux';
import Friends from './Friends';
import { followAC, unfollowAC, setFriendsAC } from '../../redux/friends-reducer';

let mapStateToProps = (state) => {
  return {
    friendsData: state.friendsPage.friendsData
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch( followAC(userId) )
    },
    unfollow: (userId) => {
      dispatch( unfollowAC(userId) )
    },
    setFriends: (friendsData) => {
      dispatch( setFriendsAC(friendsData) )
    }
  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;