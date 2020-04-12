import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
};

export const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      return !this.props.isAuth ? <Redirect to={'/login'} /> :
        <Component {...this.props} />
    }
  }

  let connectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

  return connectedRedirectComponent;

}