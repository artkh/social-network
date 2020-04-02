import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import { follow, unfollow, setFriends, setCountFriends, setCurrentPage, toggleIsLoading } from '../../redux/friends-reducer';
import * as axios from 'axios';

class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsLoading(false);
      this.props.setFriends(response.data.items);
      this.props.setCountFriends(response.data.totalCount);
    });
  }
  
  onPage = (pageNumber) => {
    this.props.toggleIsLoading(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsLoading(false);
      this.props.setFriends(response.data.items);
      this.props.setCountFriends(response.data.totalCount);
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