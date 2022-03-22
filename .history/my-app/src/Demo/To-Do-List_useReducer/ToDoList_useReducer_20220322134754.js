import React from "react";

const init = {
  job: "",
  jobs: [],
};

const ToDoList_useReducer = () => {
  return (
    <div style={{ margin: 100 }}>
      <input style={{ border: "solid 2px" }} placeholder="enter job..."></input>
      <button style={{ marginLeft: "5px", cursor: "pointer" }}>ADD JOB</button>
    </div>
  );
};

export default ToDoList_useReducer;
