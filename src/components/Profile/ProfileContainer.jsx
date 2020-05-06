import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunk, getStatusThunk, updateStatusThunk } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
// import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getProfileData, getTextStatus, getAuthUserId } from '../../redux/profile-selectors';

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId; //если id профиля неизвестен, тогда берем его из аутентификационного стора
      if (!userId) {
        this.props.history.push('/login'); //если в аутентификационном сторе id также неизвестен, делаем редирект на страницу /login
      }
    }

    this.props.getProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return <Profile profileData={this.props.profileData}
    textStatus={this.props.textStatus}
    updateStatus={this.props.updateStatusThunk} />
  }

}

let mapStateToProps = (state) => {
  return {
    profileData: getProfileData(state),
    textStatus: getTextStatus(state),
    authUserId: getAuthUserId(state)
  }
};

export default compose(
  connect(mapStateToProps, { getProfileThunk, getStatusThunk, updateStatusThunk }),
  withRouter,
  // withAuthRedirect
)
(ProfileContainer);