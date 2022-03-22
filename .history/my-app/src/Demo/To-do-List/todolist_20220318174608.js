import React, { useState } from "react";
import "./todolistStyle.css";

const Todolist = () => {
  const [job, setJob] = useState("");
  const [listWork, setListWork] = useState([]);

  return (
    <div>
      <input
        className="inputToDoList"
        onchange={(e) => setJob.target.value}
        value={job}
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
