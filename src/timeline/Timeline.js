import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "cbum",
      postImage:
        "https://fitnessvolt.com/wp-content/uploads/2020/09/chris-bumstead-3.jpg",
      likes: 432.737,
      timestamp: "2d",
    },
    {
      user: "charlesdobronxs",
      postImage:
        "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3170034:1639310867/Charles-do-Bronx.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=e2f45f1",
      likes:735.643,
      timestamp: "7d",
    },
    {
      user: "playstation",
      postImage:
        "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
      likes: 935.728,
      timestamp: "5d",
    },
    {
      user: "gabrielmedina",
      postImage:
        "https://ogimg.infoglobo.com.br/in/23311539-989-7d1/FT1086A/medina_pipe.jpg",
      likes: 432.828,
      timestamp: "3d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
