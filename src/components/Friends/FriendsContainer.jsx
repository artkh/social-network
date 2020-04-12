import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import { setCurrentPage, setFriendsThunk, followThunk, unfollowThunk } from '../../redux/friends-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

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
      followThunk={this.props.followThunk}
      unfollowThunk={this.props.unfollowThunk} />
  }
}

let mapStateToProps = (state) => {
  return {
    friendsData: state.friendsPage.friendsData,
    totalCount: state.friendsPage.totalCount,
    pageSize: state.friendsPage.pageSize,
    currentPage: state.friendsPage.currentPage,
    isLoading: state.friendsPage.isLoading,
    followingIsProgress: state.friendsPage.followingIsProgress,
    isAuth: state.auth.isAuth
  }
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch( followAC(userId) )
//     },
//   }
// }

let AuthRedirectComponent = withAuthRedirect(FriendsContainer);

export default connect(mapStateToProps, { setCurrentPage, setFriendsThunk, followThunk, unfollowThunk })(AuthRedirectComponent);