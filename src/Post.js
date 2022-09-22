import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="shivam"
          src="/static/images/avatar/1.jpg"
        />
        <h1>{username}</h1>
      </div>

      <img className="post__image" src={imageUrl} alt="" />

      <h3 className="post__text">
        <strong>{username}</strong> {caption}
      </h3>
    </div>
  );
}
export default Post;
