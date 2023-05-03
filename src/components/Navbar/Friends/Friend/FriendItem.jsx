import React from "react";
import s from "../../Navbar.module.css";
import { NavLink } from "react-router-dom";

const FriendItem = (props) => {
  return (
    <div id={props.id} className={s.friendItem}>
      <NavLink to="/">
        <>
          <img src={props.img} />
        </>
        <>{props.name}</>
      </NavLink>
    </div>
  );
};

export default FriendItem;
