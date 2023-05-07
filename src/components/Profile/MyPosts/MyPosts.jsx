import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/state";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => (
    <Post message={p.message} like={p.likeCounter} id={p.id} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={props.newPostText}
            ref={newPostElement}
            onChange={onPostChange}
          />
        </div>
        <button onClick={addPost}>Add new post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
