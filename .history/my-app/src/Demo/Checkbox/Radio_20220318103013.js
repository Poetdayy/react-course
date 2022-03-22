import React, { useState } from "react";
const course = [
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
  const handleClick = () => {};
  return (
    <div style={{ margin: 25 }}>
      <h1>Bạn học trường nào? </h1>
      {course.map((item) => (
        <div key={item.key} style={{ fontSize: 30 }}>
          <input className="radio-box" type="radio" />
          {item.university}
        </div>
      ))}
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Radio;
