import React, { useState } from "react";

const SetTimeOut = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={setShow(!show)}
        style={{ margin: 50, width: 100, height: 50 }}
      >
        SetTimeOut
      </button>
    </div>
  );
};

export default SetTimeOut;
