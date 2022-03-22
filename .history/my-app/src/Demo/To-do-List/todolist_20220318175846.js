import React, { useState } from "react";
import "./todolistStyle.css";

const Todolist = () => {
  const [job, setJob] = useState("");
  const [listWork, setListWork] = useState([]);
  console.log(job);

  const handleSubmit = () =>
  {
      setListWork((prev) => [...prev,job];
  } 

  return (
    <div>
      <input
        className="inputToDoList"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handleSubmit} className="buttonToDoList">Add</button>
      <ul>
        {listWork.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
