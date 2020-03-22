import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import Friend from '../Friends/Friend/Friend';

const Navbar = (props) => {

  // let friendsItem = props.friendsData.map(f => <Friend id={f.id} name={f.name} img={f.img} />);

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
        {/* <div className={s.friends}>
          {friendsItem}
        </div> */}
      </aside>
  );
}
export default Navbar;