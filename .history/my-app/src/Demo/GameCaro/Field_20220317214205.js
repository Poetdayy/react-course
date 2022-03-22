import React from "react";
import Cell from "./Cell";
import "./GameStyle.css";
const Field = (props) => {
  return (
    <div className="game-board">
      {props.cells.map((item) => (
        <Cell></Cell>
      ))}
    </div>
  );
};

export default Field;
