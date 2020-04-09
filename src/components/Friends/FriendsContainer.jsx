import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import { setCurrentPage, setFriendsThunk, onFollowThunk, onUnFollowThunk } from '../../redux/friends-reducer';

class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.setFriendsThunk(this.props.currentPage, this.props.pageSize);
  }
  
  onPage = (pageNumber) => {
    this.props.setFriendsThunk(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  }

  render() {
    return <Friends totalCount={this.props.totalCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      friendsData={this.props.friendsData}
      onPage={this.onPage}
      isLoading={this.props.isLoading}
      followingIsProgress={this.props.followingIsProgress}
      onFollowThunk={this.props.onFollowThunk}
      onUnFollowThunk={this.props.onUnFollowThunk} />
  }
}

let mapStateToProps = (state) => {
  return {
    friendsData: state.friendsPage.friendsData,
    totalCount: state.friendsPage.totalCount,
    pageSize: state.friendsPage.pageSize,
    currentPage: state.friendsPage.currentPage,
    isLoading: state.friendsPage.isLoading,
    followingIsProgress: state.friendsPage.followingIsProgress
  }
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch( followAC(userId) )
//     },
//   }
// }

export default connect(mapStateToProps, { setCurrentPage, setFriendsThunk, onFollowThunk, onUnFollowThunk })(FriendsContainer);