import React, { useState } from "react";

const Memo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <br />
      <input
        value={price}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Memo;
