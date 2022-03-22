import React, { useState } from "react";

// Ứng dụng useRef để lấy tham số prevCount và Count hiện tại
const Countdown = () => {
  const [count, setCount] = useState(60);

  const handleStart = () => {
    setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };
  const handleStop = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={handleStart}>Next</button>
      <button onClick={handleStop}>Prev</button>
      <h1>{count}</h1>
    </div>
  );
};

//
export default Countdown;
