import React, { useState } from "react";
import Field from "./Field";
import "./GameStyle.css";

const Caro = (props) => {
  const [board, setBoard] = useState(Array(9).fill("null"));
  return (
    <div>
      <Field></Field>
    </div>
  );
};

export default Caro;
