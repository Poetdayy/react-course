import React, { useEffect, useRef, useState } from "react";

// Ứng dụng useRef để lấy tham số prevCount và Count hiện tại. Và làm chức năng start thì đếm ngược, bấm stop thì dừng
const Countdown = () => {
  const [count, setCount] = useState(60);
  const timerID = useRef();
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerID.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerID.current);
  };

  console.log(count, prevCount);
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
