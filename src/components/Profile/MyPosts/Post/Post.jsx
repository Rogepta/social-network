import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://gossipgist.com/uploads/30599/lana-rhoades-wothappen.jpg" />
      {props.message}
      <div>
        <span>{props.like} ❤️</span>
      </div>
    </div>
  );
};

export default Post;
