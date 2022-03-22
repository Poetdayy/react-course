import React from "react";

const TextAreaAutoResize = () => {
  return (
    <div>
      <textarea
        className="w-full max-w-[400px] p-5 rounded-lg border solid border-gray-400 resize-none"
        placeholder="Enter your name..."
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
