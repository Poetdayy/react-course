import React, { useState } from "react";

const SetTimeOut = () => {
  const [show, setShow] = useState(false);
  const [countdown, setCountdown] = useState(100);
  const count = () => {
    setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
  };
  return (
    <div>
      <button
        onClick={setShow(!show) && count}
        style={{ margin: 50, width: 100, height: 50 }}
      >
        SetTimeOut
      </button>
      {show && <h1>{countdown}</h1>}
    </div>
  );
};

export default SetTimeOut;
