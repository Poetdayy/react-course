import React from "react";

const Cell = ({ value, onClick }) => {
  return (
    <div className={`cell-game ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
