import React, { useState } from "react";

const GetAPI = () => {
  const tabs = ["post", "comments", "albums", "photos", "todos", "users"];
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        style={{ margin: 50, heigth: 50, width: 100, cursor: "pointer" }}
      >
        Toogle
      </button>
      {tabs.map((tab) => (
        <button key={tab}>{tab}</button>
      ))}
    </div>
  );
};

export default GetAPI;
