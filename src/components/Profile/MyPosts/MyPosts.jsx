import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi, How are you?", likeCounter: 15 },
    { id: 2, message: "Hello, It is Lana!", likeCounter: 228 },
    { id: 2, message: "Hello, It is Lana!", likeCounter: 228 },
    { id: 2, message: "Hello, It is Lana!", likeCounter: 228 },
    { id: 2, message: "Hello, It is Lana!", likeCounter: 228 },
  ];

  let postsElements = postsData.map((p) => (
    <Post message={p.message} like={p.likeCounter} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add new post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
