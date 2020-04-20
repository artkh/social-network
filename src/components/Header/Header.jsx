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
          {/* {props.isAuth ? <button onClick={props.logout}>log out</button> : null} */}
          <NavLink to='/login' className={s.auth__login}> {props.isAuth ?
            <div> <button onClick={props.logout}>log out</button> {props.login} </div> : 'login'} </NavLink>
        </div>
      </div>
    </header>
  );
}
export default Header;