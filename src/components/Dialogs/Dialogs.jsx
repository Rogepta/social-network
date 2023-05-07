import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogElements = state.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} key={d.id} img={d.img} />
  ));
  let messageElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogElements}</div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              placeholder="Введите сообщение"
              value={newMessageBody}
              onChange={onNewMessageChange}
            />
          </div>
          <div>
            {" "}
            <button onClick={onSendMessageClick}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
