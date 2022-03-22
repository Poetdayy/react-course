import React, { useState } from "react";
import Field from "./Field";
import "./GameStyle.css";

const Caro = (props) => {
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
