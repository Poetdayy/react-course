import React, { useState } from "react";
import Field from "./Field";
import "./GameStyle.css";
import { winner } from "../../helper";

const Caro = (props) => {
  const Winner = winner(board);
  const [xIsNext, setxIsNext] = useState(true);
  const [board, setBoard] = useState(Array(9).fill("null"));
  const handleClick = () => {};
  return (
    <div>
      <Field cells={board} onClick={handleClick}></Field>
    </div>
  );
};

export default Caro;
