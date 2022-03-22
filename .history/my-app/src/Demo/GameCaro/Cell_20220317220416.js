import React from "react";

const Cell = ({ onClick, value }) => {
  console.log(onClick, value);
  return (
    <div className="cell-game" on onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
