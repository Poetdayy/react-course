import React, { useState } from "react";

const Memo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {};

  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        style={{ border: "solid 1px" }}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <br />
      <input
        value={price}
        placeholder="Enter name..."
        onChange={(e) => setPrice(e.target.value)}
        type="text"
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <h1>Total:</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name - product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Memo;
