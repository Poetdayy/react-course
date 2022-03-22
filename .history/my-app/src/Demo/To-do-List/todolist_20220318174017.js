import React, { useState } from "react";

const Todolist = () => {
  const [job, setJob] = useState("");
  const [listWork, setListWork] = useState([]);

  return (
    <div>
      <input style={{ border: "solid", margin: 25 }} value={job} />
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
