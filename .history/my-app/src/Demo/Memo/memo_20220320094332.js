import React, { useState } from "react";

const Memo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([...products, { name, price: +price }]);
  };

  return (
    <div style={{ padding: "10px 32px", margin: "50px 50px" }}>
      <input
        style={{ border: "solid 2px", margin: 5 }}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <br />
      <input
        style={{ border: "solid 2px", margin: 5 }}
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
        type="text"
      />
      <br />
      <button
        style={{ border: "solid 2px", margin: 5, cursor: "pointer" }}
        onClick={handleSubmit}
      >
        Add
      </button>
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
