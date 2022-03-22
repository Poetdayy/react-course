import React, { useState } from "react";
import "./todolistStyle.css";

const Todolist = () => {
  const [job, setJob] = useState("");
  const [listWork, setListWork] = useState([]);
  console.log(job);

  return (
    <div>
      <input
        className="inputToDoList"
        // value={job}
        // onchange={(e) => setJob(e.target.value)}
      />
      <button className="buttonToDoList">Add</button>
      <ul>
        {listWork.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
