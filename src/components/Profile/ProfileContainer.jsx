import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
      // userId = this.props.authUserId;
    }
    usersAPI.getProfile(userId).then(data => {
      this.props.setProfile(data);
    })
  }

  render() {
    return <Profile profileData={this.props.profileData} />
  }

}

let mapStateToProps = (state) => {
  return {
    profileData: state.profilePage.profileData,
    // authUserId: state.auth.userId
  }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setProfile })(WithUrlDataContainerComponent);