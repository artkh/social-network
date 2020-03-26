import { connect } from 'react-redux';
import Friends from './Friends';
import { followAC, unfollowAC } from '../../redux/friends-reducer';

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
    }
  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;