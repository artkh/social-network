import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
      <aside className={s.navbar}>
        <nav className={s.nav}>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
          <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
          <NavLink to="/news" activeClassName={s.active}>News</NavLink>
          <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
          <NavLink to="/settings" activeClassName={s.active} className={s.link_settings}>Settings</NavLink>
          <NavLink to="/friends" activeClassName={s.active} className={s.link_friends}>Friends</NavLink>
        </nav>
        <div className={s.friends}>
          <a href="#a" className={s.friends_item}>
            <img src="https://lh3.googleusercontent.com/proxy/V5SbgD6BBgj1I0NDYE77iRnSWXpzMW8LoqTly0-VyEb1UHdADU9rH0xVz-nmx_z9QPqkjD28dDrYz3Ppv0RN825CKyCqie--VufBvPMFMxA2Nj_udIPUf624m-Ir4BWcSdfP01Tp" alt="" className={s.friends_item_image} />
            <div className={s.friends_item_name}>
              Andrew
            </div>
          </a>
          <a href="#a" className={s.friends_item}>
            <img src="https://lh3.googleusercontent.com/proxy/V5SbgD6BBgj1I0NDYE77iRnSWXpzMW8LoqTly0-VyEb1UHdADU9rH0xVz-nmx_z9QPqkjD28dDrYz3Ppv0RN825CKyCqie--VufBvPMFMxA2Nj_udIPUf624m-Ir4BWcSdfP01Tp" alt="" className={s.friends_item_image} />
            <div className={s.friends_item_name}>
              Andrew
            </div>
          </a>
          <a href="#a" className={s.friends_item}>
            <img src="https://lh3.googleusercontent.com/proxy/V5SbgD6BBgj1I0NDYE77iRnSWXpzMW8LoqTly0-VyEb1UHdADU9rH0xVz-nmx_z9QPqkjD28dDrYz3Ppv0RN825CKyCqie--VufBvPMFMxA2Nj_udIPUf624m-Ir4BWcSdfP01Tp" alt="" className={s.friends_item_image} />
            <div className={s.friends_item_name}>
              Andrew
            </div>
          </a>
        </div>
      </aside>
  );
}
export default Navbar;