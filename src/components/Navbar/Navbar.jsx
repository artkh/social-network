import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {

  return (
      <aside className={s.navbar}>
        <nav className={s.nav}>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
          <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
          <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
          <NavLink to="/news" activeClassName={s.active}>News</NavLink>
          <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
          <NavLink to="/settings" activeClassName={s.active} className={s.link_settings}>Settings</NavLink>
        </nav>
      </aside>
  );
}
export default Navbar;