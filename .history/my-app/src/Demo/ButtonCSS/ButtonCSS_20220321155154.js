// Sử dụng SASS để CSS

import React from "react";

import "./Button.scss";

const ButtonCSS = ({ children }) => {
  return <div class="button">{children}</div>;
};

export default ButtonCSS;
