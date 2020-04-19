import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { postAuthThunk } from '../../redux/auth-reducer';
import { Input } from '../elements/form/FormsControl';
import { required } from '../utilites/validatorsForm/validators';

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} name={'login'} placeholder={'login'}
          validate={[required]} />
      </div>
      <div>
        <Field component={Input} name={'password'} placeholder={'password'}
          validate={[required]} />
      </div>
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

const Login = (props) => {
  const onSubmit = (dataForm) => {
    postAuthThunk(dataForm.login, dataForm.password, dataForm.rememberMe)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login;