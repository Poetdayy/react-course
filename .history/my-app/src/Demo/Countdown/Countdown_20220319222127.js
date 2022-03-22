import React, { useRef, useState } from "react";

// Ứng dụng useRef để lấy tham số prevCount và Count hiện tại
const Countdown = () => {
  const [count, setCount] = useState(60);
  const timerID = useRef();

  const handleStart = () => {
    const timerID = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerID);
  };

  return (
    <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <h1>{count}</h1>
    </div>
  );
};

//
export default Countdown;
