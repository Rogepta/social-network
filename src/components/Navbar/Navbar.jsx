import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  const setActive = ({ isActive }) => (isActive ? `${s.activeLink}` : "");

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={setActive}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={setActive}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={setActive}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={setActive}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" className={setActive}>
          Settings
        </NavLink>
      </div>
      <Friends dialogs={props.state.dialogs} />
    </nav>
  );
};

export default Navbar;
