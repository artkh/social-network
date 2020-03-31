import { connect } from 'react-redux';
import Friends from './Friends';
import { followAC, unfollowAC, setFriendsAC, setCountFriendsAC, setCurrentPageAC } from '../../redux/friends-reducer';

let mapStateToProps = (state) => {
  return {
    friendsData: state.friendsPage.friendsData,
    totalCount: state.friendsPage.totalCount,
    pageSize: state.friendsPage.pageSize,
    currentPage: state.friendsPage.currentPage
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
    },
    setCountFriends: (totalCount) => {
      dispatch(setCountFriendsAC(totalCount))
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page))
    },
  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;