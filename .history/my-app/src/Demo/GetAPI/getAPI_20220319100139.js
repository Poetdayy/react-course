import React, { useEffect, useState } from "react";

const GetAPI = () => {
  const tabs = ["post", "comments", "albums", "photos", "todos", "users"];
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("post");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  console.log(open);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        style={{ margin: 50, heigth: 50, width: 100, cursor: "pointer" }}
      >
        Toogle
      </button>
      {tabs.map((tab) => (
        <button 
        key={tab}
        style={tab === type {color: red} }
        >{tab}</button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetAPI;
