import React from "react";

const Cell = ({ value, onClick }) => {
  return (
    <div className="cell-game" on onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
