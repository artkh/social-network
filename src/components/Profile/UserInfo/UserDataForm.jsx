import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../elements/form/FormsControl';

const UserDataForm = (props) => {

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        
        <button>save edit</button>

        <div>
          <Field component={Textarea} name={'aboutMe'} type={'text'} 
            placeholder={'About me'} />
        </div>

        <div>
          <label htmlFor="lookingForAJob">looking for a job?</label>
          <Field component={Input} name={'lookingForAJob'} id={'lookingForAJob'} 
            type={'checkbox'} />
        </div>

        <div>
          <Field component={Textarea} name={'lookingForAJobDescription'} id={'lookingForAJobDescription'}
            type={'text'} placeholder={'Professional skills'} />
        </div>

        <div>
          <Field component={Input} name={'fullName'} id={'fullName'}
            type={'text'} placeholder={'Full Name'} />
        </div>

        <div>
          Contacts: 
          {Object.keys(props.contacts).map(c => {
            return <Field key={c} component={Input} name={'contacts.' + c} placeholder={c} /> //return не забывать ставить!
          })}
        </div>

        {props.error ? <div>{props.error}</div> : null}
        
      </form>
    </div>
  )
}

const UserDataReduxForm = reduxForm({ form: 'UserProfile' })(UserDataForm);

export default UserDataReduxForm;