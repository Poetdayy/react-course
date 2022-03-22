import React, { useReducer } from "react";

const init = {
  job: "",
  jobs: [],
};

// ACTION
const SETJOB_ACTION = "setjob";
const ADDJOB_ACTION = "addjob";
const DELETEJOB_ACTION ="deletejob"

// Reducer
const reducer = (state, action) => {
    switch(){
        case 1:
        case 2:
    }
}


const ToDoList_useReducer = () => {

  const [job, dispatch] = useReducer(reducer, init)

  return (
    <div style={{ margin: 100 }}>
      <input style={{ border: "solid 2px" }} placeholder="enter job..."></input>
      <button style={{ marginLeft: "5px", cursor: "pointer" }}>ADD JOB</button>
    </div>
  );
};

export default ToDoList_useReducer;
