import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'input'} name={'login'} placeholder={'login'} />
      </div>
      <div>
        <Field component={'input'} name={'password'} placeholder={'password'} />
      </div>
      <div>
        <Field component={'input'} type={'checkbox'} name={'rememberMe'} id={'rememberMe'} />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <div>
        <button>submit</button> 
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'Login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (dataForm) => {
    console.log(dataForm);
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login;