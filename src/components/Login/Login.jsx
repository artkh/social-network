import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginAuthThunk } from '../../redux/auth-reducer';
import { Input } from '../elements/form/FormsControl';
import { required } from '../utilites/validatorsForm/validators';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from '../elements/form/FormsControl.module.scss';

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} name={'login'} placeholder={'login'}
          validate={[required]} type={'email'} />
      </div>
      <div>
        <Field component={Input} name={'password'} placeholder={'password'}
          validate={[required]} type={'password'} />
      </div>
      { props.error ? <div className={s.errorMessage}>{props.error}</div> : null }
      <div>
        <Field component={'input'} type={'checkbox'} name={'rememberMe'} id={'rememberMe'} />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <div>
        <button type={'submit'}>submit</button> 
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'Login' })(LoginForm);

export class Login extends React.Component {

  onSubmit = (dataForm) => {
    this.props.loginAuthThunk(dataForm.login, dataForm.password, dataForm.rememberMe);
  }

  render() {

    if(this.props.isAuth) return <Redirect to={'/profile'} />

    return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { loginAuthThunk })(Login);