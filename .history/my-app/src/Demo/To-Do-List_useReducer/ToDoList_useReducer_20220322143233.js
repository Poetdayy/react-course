import React, { useReducer, useState } from "react";

const init = {
  job: "",
  jobs: [],
};

// ACTION
const SETJOB_ACTION = "setjob";
const ADDJOB_ACTION = "addjob";
const DELETEJOB_ACTION = "deletejob";

//SetAction
const setJob = (payload) => {
  return { type: SETJOB_ACTION, payload };
};
const addJob = (payload) => {
  return { type: ADDJOB_ACTION, payload };
};
const delJob = (payload) => {
  return { type: DELETEJOB_ACTION, payload };
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SETJOB_ACTION:
      return {
        ...state,
        job: action.payload,
      };
    case ADDJOB_ACTION:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETEJOB_ACTION:
      return {
        ...state,
        job: action.payload,
      };
    default:
      throw new Error("Invalid Action");
  }
};

const ToDoList_useReducer = () => {
  const [state, dispatch] = useReducer(reducer, init);
  const { job, jobs } = state;

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
  };

  const handleSetJob = (event) => {
    dispatch(setJob(event.target.value));
  };

  return (
    <div style={{ margin: 100 }}>
      <input
        value={job}
        onChange={handleSetJob}
        style={{ border: "solid 2px" }}
        placeholder="enter job..."
      ></input>
      <button
        onClick={handleSubmit}
        style={{ marginLeft: "5px", cursor: "pointer" }}
      >
        ADD JOB
      </button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job} </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList_useReducer;
