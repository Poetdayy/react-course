import React from "react";

const init = {
  job: "",
  jobs: [],
};

const ToDoList_useReducer = () => {
  return (
    <div style={{ margin: 100 }}>
      <input style={{ border: "solid 1px" }} placeholder="enter job..."></input>
      <button>ADD JOB</button>
    </div>
  );
};

export default ToDoList_useReducer;
