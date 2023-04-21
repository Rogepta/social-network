import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
      </div>
      <div>ava + descr</div>
      <div>
        My posts
        <div>new post</div>
      </div>
      <div>post 1</div>
      <div>post 2</div>
    </div>
  );
};

export default Profile;
