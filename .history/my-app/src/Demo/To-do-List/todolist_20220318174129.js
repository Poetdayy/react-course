import React, { useState } from "react";
import "./todolistStyle.css";

const Todolist = () => {
  const [job, setJob] = useState("");
  const [listWork, setListWork] = useState([]);

  return (
    <div>
      <input className="inputToDoList" value={job} />
      <button style={{ margin: 25, width: 50, height: 30, cursor: "pointer" }}>
        Add
      </button>
      {/* <ul>
        {listWork.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Todolist;
