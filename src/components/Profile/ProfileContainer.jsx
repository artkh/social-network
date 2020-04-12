import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunk } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }

    this.props.getProfileThunk(userId);
  }

  render() {
    return <Profile profileData={this.props.profileData} />
  }

}

let mapStateToProps = (state) => {
  return {
    profileData: state.profilePage.profileData
  }
};


let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getProfileThunk })(WithUrlDataContainerComponent);