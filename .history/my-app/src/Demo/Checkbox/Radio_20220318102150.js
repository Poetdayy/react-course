import React from "react";
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
  return (
    <div style={{ margin: 25 }}>
      <h1>Bạn học trường nào? </h1>
      {course.map((item) => (
        <div key={item.key}>
          <input type="radio" />
          {item.university}
        </div>
      ))}
    </div>
  );
};

export default Radio;
