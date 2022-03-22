import React from "react";
import Cell from "./Cell";
import "./GameStyle.css";

const Field = () => {
  return (
    <div className="game-board">
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
    </div>
  );
};

export default Field;
