import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import { followAC, unfollowAC, setFriendsAC, setCountFriendsAC, setCurrentPageAC } from '../../redux/friends-reducer';
import * as axios from 'axios';

class FriendsContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setFriends(response.data.items);
      this.props.setCountFriends(response.data.totalCount);
    });
  }

  onPage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
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
      unfollow={this.props.unfollow} />
  }
}

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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);