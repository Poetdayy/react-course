import React, { useState } from "react";

// Ứng dụng useRef để lấy tham số prevCount và Count hiện tại
const Countdown = () => {
  const [count, setCount] = useState();

  const handleNext = () => {
    setCount((prev) => prev + 1);
  };
  const handlePrev = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Prev</button>
      <h1>200</h1>
    </div>
  );
};

//
export default Countdown;
