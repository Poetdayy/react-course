import React from "react";

const props = {
  value: "x",
  onClick: () => true;
}

const Cell = (props) => {
  return <div className="cell-game" on onClick={props.onClick}></div>;
};

export default Cell;
