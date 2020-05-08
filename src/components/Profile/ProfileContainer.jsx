import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk } from '../../redux/profile-reducer';
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

  componentDidUpdate(prevProps, prevState, snapShot) { //перерисовка компоненты при нажатии на profile
    if (this.props.match.params.userId !== prevProps.match.params.userId) { //если текущий userId не равен предыдущему из props, значит перерисовывать
      this.refreshProfile();
    }
  }

  render() {
    return <Profile profileData={this.props.profileData}
    textStatus={this.props.textStatus}
    updateStatus={this.props.updateStatusThunk}
    isOwner={this.props.match.params.userId}
    savePhoto={this.props.savePhotoThunk} />
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
  connect(mapStateToProps, { getProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk }),
  withRouter,
  // withAuthRedirect
)
(ProfileContainer);