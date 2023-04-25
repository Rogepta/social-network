import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const message = props.messages;
  const dialog = props.dialogs;

  let dialogElements = dialog.map((d) => (
    <DialogItem id={d.id} name={d.name} key={d.id} />
  ));
  let messageElements = message.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
