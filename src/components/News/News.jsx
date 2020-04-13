import React from 'react';
import s from './News.module.scss'
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

const News = () => {
  return (
    <div className={s.news}>
      news
    </div>
    );
}

export default compose(
  withAuthRedirect
)(News)