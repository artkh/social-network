import React from 'react';
import s from './Music.module.scss';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

const Music = () => {
  return (
    <div className={s.music}>
      music
    </div>
    );
}

export default compose(
  withAuthRedirect
)(Music)
