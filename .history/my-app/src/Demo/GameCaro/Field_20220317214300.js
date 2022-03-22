import React from "react";
import Cell from "./Cell";
import "./GameStyle.css";
const Field = (props) => {
  return (
    console.log(props);
    <div className="game-board">
      {props.cells.map((item) => (
        <Cell></Cell>
      ))}
    </div>
  );
};

export default Field;
