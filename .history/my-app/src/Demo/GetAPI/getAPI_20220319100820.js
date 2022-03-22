import React, { useEffect, useState } from "react";

const GetAPI = () => {
  const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  return (
    <div>
      <button style={{ margin: 50, heigth: 50, width: 100, cursor: "pointer" }}>
        Toogle
      </button>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { backgroundColor: "red" } : ""}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
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
