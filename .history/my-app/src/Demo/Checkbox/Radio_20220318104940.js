import React, { useState } from "react";
import "./RadioStyle.css";

const school = [
  {
    key: 1,
    university: "Bách Khoa Hà Nội",
  },
  {
    key: 2,
    university: "Ngoại Thương",
  },
  {
    key: 3,
    university: "Kinh tế quốc dân",
  },
];

const Radio = () => {
  const [isSelected, setIsSelected] = useState();
  console.log(isSelected);
  const handleClick = () => {};
  return (
    <div className="radio-content">
      <h1>Bạn học trường nào? </h1>
      {school.map((item) => (
        <div key={item.key} style={{ fontSize: 30 }}>
          <input
            style={{ height: 20, width: 20, marginRight: 10 }}
            className="radio-box"
            type="radio"
            checkeds={item.key === isSelected}
            onChange={() => setIsSelected(item.key)}
          />
          {item.university}
        </div>
      ))}
      <button className="submit-button" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default Radio;
