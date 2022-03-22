import React, { useState } from "react";

const todolist = () => {
  const [job, setJob] = useState("");
  const [listwork, setListWork] = useState([]);

  return (
    <div>
      <ul>
        {work.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default todolist;
