import React, { useState } from "react";
import "./todolistStyle.css";

const Todolist = () => {
  const [job, setJob] = useState("");
  const [listWork, setListWork] = useState(() => {
    const storage = JSON.parse(localStorage.getItem("jobs"));
    return storage;
  });
  console.log(job);

  const handleSubmit = () => {
    setListWork((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  return (
    <div>
      <input
        className="inputToDoList"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handleSubmit} className="buttonToDoList">
        Add
      </button>
      <ul>
        {listWork.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
