import "./App.css";
import Post from "./Post";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "sen_kakashi",
      caption: "sharingun",
      imageUrl: "https://wallpaperaccess.com/full/851980.jpg",
    },
    {
      username: "Uchiha_Itachi",
      caption: "Secret agent of hidden leaf village",
      imageUrl: "https://images5.alphacoders.com/716/716760.png",
    },
    {
      username: "Uzu_Naruto",
      caption: "Saviour of hidden leaf village",
      imageUrl:
        "https://www.enwallpaper.com/wp-content/uploads/2022/01/08a862610894cee4200bf883bb3a7ff1.png",
    },
  ]);
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {posts.map((post, key) => {
        return (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default App;
