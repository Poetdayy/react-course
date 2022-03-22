import React from "react";

const init = 0;
const NEXT_ACTION = "next";
const PREV_ACTION = "prev"
const reducer = (state, action) => {
    switch()
    {
        case "up": state += 1;
        case: "down": state -= 1;
        default: throw new Error("Invalid error action")
    }
}

const CountdownUseReducer = () => {
  return (
    <div style={{ margin: "50px 50px" }}>
      <button style={{ cursor: "pointer", marginRight: "5px" }}>Next</button>
      <button style={{ cursor: "pointer" }}>Prev</button>
      <br />
      <h1>0</h1>
    </div>
  );
};

export default CountdownUseReducer;
