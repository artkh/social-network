import React from 'react';
import s from'./Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.inner}>
        <a href="#a" className={s.logo}>
          <img src="https://intercom-online.zp.ua/wp-content/themes/net/img/facebook.png" alt="" />
        </a>
      </div>
    </header>
  );
}
export default Header;