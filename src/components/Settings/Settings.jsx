import React from 'react';
import s from './Settings.module.scss';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

const Settings = () => {
    return (
        <div className={s.settings}>
            settings
        </div>
    );
}

export default compose(
    withAuthRedirect
)(Settings)