import React from 'react';
import s from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.inner}>
        <a href="/profile">Profile</a>
        <a href="/dialogs">Messages</a>
        <a href="/news">News</a>
        <a href="/music">Music</a>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
}
export default Navbar;