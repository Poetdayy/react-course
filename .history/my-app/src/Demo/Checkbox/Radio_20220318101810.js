import React from "react";
const course = [
  {
    key: 1,
    university: "Bách Khoa Hà Nội",
  },
  {
    key: 1,
    university: "Bách Khoa Hà Nội",
  },
  {
    key: 1,
    university: "Bách Khoa Hà Nội",
  },
];
const Radio = () => {
  return (
    <div className="radio-box">
      <h1>Bạn học trường nào? </h1>
      {course.map((item) => (
        <imput>{item.university}</imput>
      ))}
    </div>
  );
};

export default Radio;
