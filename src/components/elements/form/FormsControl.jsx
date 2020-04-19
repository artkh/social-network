import React from 'react';
import s from './FormsControl.module.scss';

export const Textarea = ({ input, meta, ...props }) => {
  
  let hasError = meta.touched && meta.error;

  return (
    <div className={s.formsControl + ' ' + (hasError ? s.error : '') }>
      <textarea {...input} {...props} />
      { hasError && <span>{meta.error}</span> }
    </div>
  )
}

export const Input = ({ input, meta, ...props }) => {

  let hasError = meta.touched && meta.error;

  return (
    <div className={s.formsControl + ' ' + (hasError ? s.error : '')}>
      <input {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}