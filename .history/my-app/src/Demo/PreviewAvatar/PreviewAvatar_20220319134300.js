import React, { useState } from "react";
import ChooseAvt from "./ChooseAvt";

const PreviewAvatar = () => {
  const [showChooseAvt, setShowChooseAvt] = useState(false);
  return (
    <div>
      <button
        onClick={setShowChooseAvt(!showChooseAvt)}
        style={{ margin: 300 }}
      >
        ChangeAvt
      </button>
      {showChooseAvt && <ChooseAvt></ChooseAvt>}
    </div>
  );
};

export default PreviewAvatar;
