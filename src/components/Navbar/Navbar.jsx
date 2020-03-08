import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.inner}>
        <a href="#a">Profile</a>
        <a href="#a">Messages</a>
        <a href="#a">News</a>
        <a href="#a">Music</a>
        <a href="#a">Settings</a>
      </div>
    </nav>
  );
}
export default Navbar;