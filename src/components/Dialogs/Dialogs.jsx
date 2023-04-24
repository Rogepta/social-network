import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  const path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Danil" },
    { id: 2, name: "Nikita" },
    { id: 3, name: "Dima" },
    { id: 4, name: "Kolya" },
  ];
  let messages = [
    { message: "Kolya kozel" },
    { message: "Nikita chert" },
    { message: "Danil tvar`" },
    { message: "Dima paskyda" },
  ];

  let dialogElements = dialogs.map((d) => <Dialog id={d.id} name={d.name} />);
  let messageElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
