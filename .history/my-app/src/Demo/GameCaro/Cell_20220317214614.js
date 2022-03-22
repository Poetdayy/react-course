import React from "react";

const Cell = (props) => {
  return (
    <div className="cell-game" on onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
