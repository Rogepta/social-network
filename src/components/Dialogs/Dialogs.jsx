import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} key={d.id} img={d.img} />
  ));
  let messageElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    let message = newMessageElement.current.value;
    alert(message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
      <div className={s.fieldEnter}>
        <div className={s.textarea}>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
