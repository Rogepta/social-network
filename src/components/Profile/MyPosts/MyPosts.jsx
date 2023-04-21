import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add new post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, How are you?" like="15" />
        <Post message="Hello, It is Lana!" like="228" />
      </div>
    </div>
  );
};

export default MyPosts;
