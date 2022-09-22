import React from "react";
import "./Post.css";
function Post() {
  return (
    <div>
      <h1>Username</h1>

      <img
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/size/w600/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
        alt=""
      />

      <h3>Username: Caption</h3>
    </div>
  );
}
export default Post;
