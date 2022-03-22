import React, { useState } from "react";
// useMemo sử dụng để tránh re-render lại 1 xử lý logic không cần thiết re-render. useMemo sẽ lưu giá trị trả về của function và nó sẽ kiểm tra xem phụ thuộc thay đổi thì nó mới chạy hàm phía trong, còn không thì sẽ trả về value đã cached trước đó,
const Memo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([...products, { name, price: parseInt(price) }]);
  };

  console.log(typeof price);

  return (
    <div style={{ padding: "10px 32px", margin: "50px 50px" }}>
      <input
        style={{ border: "solid 2px", margin: 5 }}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        style={{ border: "solid 2px", margin: 5 }}
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
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
