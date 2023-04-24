import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <NavLink to="/" className={s.dialog + " " + s.active}>
          Danil
        </NavLink>
        <NavLink to="/" className={s.dialog}>
          Nikita
        </NavLink>
        <NavLink to="/" className={s.dialog}>
          Kolya
        </NavLink>
        <NavLink to="/" className={s.dialog}>
          Dima
        </NavLink>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Kolya kozel</div>
        <div className={s.message}>Nikita chert</div>
        <div className={s.message}>Danil tvar`</div>
        <div className={s.message}>Dima paskyda</div>
      </div>
    </div>
  );
};

export default Dialogs;
