import React, { useState } from "react";

const todolist = () => {
  const [job, setJob] = useState("");
  const [listWork, setListWork] = useState([]);

  return (
    <div>
      <ul>
        {listWork.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default todolist;
