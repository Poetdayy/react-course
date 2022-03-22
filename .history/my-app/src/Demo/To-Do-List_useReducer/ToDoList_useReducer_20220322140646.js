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
    type: SETJOB_ACTION;
    payload,
}

const addJob = (payload) => {
    type: ADDJOB_ACTION;
    payload,
}

const deleteJob = (payload) => {
    type: DELETEJOB_ACTION;
    payload,
}

// Reducer
const reducer = (state, action) => {
    switch(action.type)
    {
        case SETJOB_ACTION: 
            return
            {
                ...state,
            job: action.payload;
            }
        case ADDJOB_ACTION:
            return
            {
                ...state,
                job: action.payload;
            }
        case DELETEJOB_ACTION:
            return
            {
                ...state,
                job: action.payload;
            }
    }
};

const ToDoList_useReducer = () => {
  const [state, dispatch] = useReducer(reducer, init);
  const [job, jobs] = useState();

  return (
    <div style={{ margin: 100 }}>
      <input 
      value={job}
      onChange={(e) => {dispatch(setJob(e))}}
      style={{ border: "solid 2px" }} placeholder="enter job..."></input>
      <button style={{ marginLeft: "5px", cursor: "pointer" }}>ADD JOB</button>
      <ul>
        {jobs.map((job, index) => <lili key={index}>{job}</lili>)}
      </ul>
    </div>
  );
};

export default ToDoList_useReducer;
