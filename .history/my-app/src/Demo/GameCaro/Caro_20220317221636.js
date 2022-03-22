import React, { useState } from "react";
import Field from "./Field";
import "./GameStyle.css";
import { winner } from "../../helper";

const Caro = () => {
  const [board, setBoard] = useState(Array(9).fill("null"));
  const [xIsNext, setxIsNext] = useState(true);
  const Winner = winner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (Winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setxIsNext(!xIsNext);
  };
  return (
    <div>
      <Field cells={board} onClick={handleClick}></Field>
    </div>
  );
};

export default Caro;
