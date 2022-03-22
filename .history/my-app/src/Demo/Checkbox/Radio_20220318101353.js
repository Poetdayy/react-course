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
    <div>
      <h1 style="margin: 25px">Bạn học trường nào? </h1>
      <input className="radio-box" type="radio"></input>
    </div>
  );
};

export default Radio;
