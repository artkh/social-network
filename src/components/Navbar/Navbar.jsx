import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.inner}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
      </div>
    </nav>
  );
}
export default Navbar;