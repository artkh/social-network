import React from 'react';
import s from'./Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.inner}>
        <a href="#a" className={s.logo}>
          <img src="https://intercom-online.zp.ua/wp-content/themes/net/img/facebook.png" alt="" />
        </a>
        <div className={s.auth}>
          <NavLink to='/login' className={s.auth__login}>{props.isAuth ? props.login : 'login'}</NavLink>
        </div>
      </div>
    </header>
  );
}
export default Header;