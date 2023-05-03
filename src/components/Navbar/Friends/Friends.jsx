import React from "react";
import s from "../Navbar.module.css";
import FriendItem from "./Friend/FriendItem";

const Friends = (props) => {
  let friendElements = props.dialogs.map((f) => (
    <FriendItem id={f.id} name={f.name} img={f.img} />
  ));

  return (
    <div className={s.friends}>
      <div className={s.friend}>{friendElements}</div>
    </div>
  );
};

export default Friends;
