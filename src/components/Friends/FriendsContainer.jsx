import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import { setCurrentPage, setFriendsThunk, followThunk, unfollowThunk } from '../../redux/friends-reducer';
// import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getTotalCount, getPageSize, getCurrentPage, getIsLoading, getFollowingIsProgress, getFriendsData } from '../../redux/friends-selector';

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
    friendsData: getFriendsData(state),
    totalCount: getTotalCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingIsProgress: getFollowingIsProgress(state)
  }
};

export default compose(
  connect(mapStateToProps, { setCurrentPage, setFriendsThunk, followThunk, unfollowThunk }),
  // withAuthRedirect
)
(FriendsContainer)

// let AuthRedirectComponent = withAuthRedirect(FriendsContainer);

// export default connect(mapStateToProps, { setCurrentPage, setFriendsThunk, followThunk, unfollowThunk })(AuthRedirectComponent);