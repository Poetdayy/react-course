import React from "react";

const Cell = (props) => {
  return <div className="cell-game" on onClick={props.onClick}></div>;
};

export default Cell;
