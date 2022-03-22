import React, { useState } from "react";
import Field from "./Field";
import "./GameStyle.css";
import { winner } from "../../helper";

const Caro = () => {
  const [board, setBoard] = useState(Array(9).fill());
  const [xIsNext, setXIsNext] = useState(true);
  const Winner = winner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (Winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };

  // Reset game
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Field cells={board} onClick={handleClick}></Field>
      <button className="resetGame" onClick={handleResetGame}>
        RESET
      </button>
    </div>
  );
};

export default Caro;
