import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getLoginThunk, logoutAuthThunk } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getLoginThunk();
  }

  render () {
    return <Header login={this.props.login}
      isAuth={this.props.isAuth}
      logout={this.props.logoutAuthThunk} />
  }

}

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, { getLoginThunk, logoutAuthThunk })(HeaderContainer);