import React, { useReducer } from "react";

const init = 0;
const NEXT_ACTION = "next";
const PREV_ACTION = "prev"
const reducer = (state, action) => {
    switch(action)
    {
        case "up": state += 1;
        case: "down": state -= 1;
        default: throw new Error("Invalid error action");
    }
}

const CountdownUseReducer = () => {

  const [count, setCount] = useReducer(reducer, init);
  return (
    <div style={{ margin: "50px 50px" }}>
      <button 
      onClick = {() => dispatch(NEXT_ACTION)}
      style={{ cursor: "pointer", marginRight: "5px" }}>Next</button>
      <button 
      onClick = {() => dispatch(PREV_ACTION))}
      style={{ cursor: "pointer" }}>Prev</button>
      <br />
      <h1>{count}</h1>
    </div>
  );
};

export default CountdownUseReducer;
