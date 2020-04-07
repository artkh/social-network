import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import { follow, unfollow, setFriends, setCountFriends, setCurrentPage, toggleIsLoading } from '../../redux/friends-reducer';
import { usersAPI } from '../../api/api';

class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsLoading(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsLoading(false);
      this.props.setFriends(data.items);
      this.props.setCountFriends(data.totalCount);
    });
  }
  
  onPage = (pageNumber) => {
    this.props.toggleIsLoading(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsLoading(false);
      this.props.setFriends(data.items);
      this.props.setCountFriends(data.totalCount);
    });
  }

  render() {
    return <Friends totalCount={this.props.totalCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      friendsData={this.props.friendsData}
      onPage={this.onPage}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      isLoading={this.props.isLoading} />
  }
}

let mapStateToProps = (state) => {
  return {
    friendsData: state.friendsPage.friendsData,
    totalCount: state.friendsPage.totalCount,
    pageSize: state.friendsPage.pageSize,
    currentPage: state.friendsPage.currentPage,
    isLoading: state.friendsPage.isLoading
  }
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch( followAC(userId) )
//     },
//     unfollow: (userId) => {
//       dispatch( unfollowAC(userId) )
//     },
//     setFriends: (friendsData) => {
//       dispatch( setFriendsAC(friendsData) )
//     },
//     setCountFriends: (totalCount) => {
//       dispatch( setCountFriendsAC(totalCount) )
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch( setCurrentPageAC(pageNumber) )
//     },
//     toggleIsLoading: (isLoading) => {
//       dispatch( toggleIsLoadingAC(isLoading) )
//     },
//   }
// }

export default connect(mapStateToProps, { follow, unfollow, setFriends, setCountFriends, setCurrentPage, toggleIsLoading })(FriendsContainer);