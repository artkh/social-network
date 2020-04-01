import React from 'react';
import preloader from '../../assets/image/preloader.gif';
import s from './Preloader.module.scss'

let Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt=""/>
        </div>
    )
}

export default Preloader;