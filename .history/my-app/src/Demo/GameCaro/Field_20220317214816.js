import React from "react";
import Cell from "./Cell";
import "./GameStyle.css";
const Field = (props) => {
  console.log(props);
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell key={index} value={item} onClick={() => props.onClick()}></Cell>
      ))}
    </div>
  );
};

export default Field;
