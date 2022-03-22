import React from "react";
import Cell from "./Cell";
import "./GameStyle.css";
const Field = (props) => {
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item != null && item === "X" ? "is-x" : "is-o"}
        ></Cell>
      ))}
    </div>
  );
};

export default Field;
