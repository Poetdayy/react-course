import React, { useState } from "react";
import Field from "./Field";
import "./GameStyle.css";
import { winner } from "../../helper";

const Caro = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const Winner = winner(board);

  // Khi click vào mà đang ở trạng thái Winner hoặc boardCopy(index) thì kết thúc trò chơi. Nếu tại vị trí boardCopy mà là xIsNext thì trả về X không thì trả về O. Set bảng mới và set lượt người chơi tiếp theo.
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (Winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  // Reset game
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <div className="content-Caro">
      <Field cells={board} onClick={handleClick}></Field>
      <button className="resetGame" onClick={handleResetGame}>
        RESET
      </button>
      <div className="alert-winner">{Winner ? `Winner is ${Winner}` : ""}</div>
    </div>
  );
};

export default Caro;
