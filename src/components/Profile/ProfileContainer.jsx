import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunk, getStatusThunk, updateStatusThunk } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
// import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 6810;
    }

    this.props.getProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }

  render() {
    return <Profile profileData={this.props.profileData}
    textStatus={this.props.textStatus}
    updateStatus={this.props.updateStatusThunk} />
  }

}

let mapStateToProps = (state) => {
  return {
    profileData: state.profilePage.profileData,
    textStatus: state.profilePage.textStatus
  }
};

export default compose(
  connect(mapStateToProps, { getProfileThunk, getStatusThunk, updateStatusThunk }),
  withRouter
)
(ProfileContainer);


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { getProfileThunk })(WithUrlDataContainerComponent);