import React from "react";
import { useState } from "react";
import "./RadioStyle.css";

const courses = [
  {
    key: 1,
    course: "Tin học",
  },
  {
    key: 2,
    course: "Đại số",
  },
  {
    key: 3,
    course: "Tiếng Anh",
  },
];

const Checkbox = () => {
  const [selected, setSelected] = useState([]);

  const handleCheck = (id) => {
    setSelected((prev) => {
      const isChecked = selected.includes(id);
      if (isChecked) return selected.filter((value) => value !== id);
      else return [...prev, id];
    });
  };

  const handleClick = () => {
    console.log({ id: selected });
  };

  return (
    <div className="checkbox-content">
      <h1>Bạn thích những môn học nào? </h1>
      {courses.map((item) => (
        <div key={item.key} style={{ fontSize: 30 }}>
          <input
            style={{ height: 20, width: 20, marginRight: 10 }}
            className="checkbox-box"
            type="checkbox"
            checked={selected.includes(item.key)}
            onChange={() => handleCheck(item.key)}
          />
          {item.course}
        </div>
      ))}
      <button className="submit-button" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default Checkbox;
