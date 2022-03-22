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

  const handleCheck = (key) => {
    setSelected((prev) => {
      const isChecked = selected.includes(key);
      // Check xem tồn tại key không, nếu tồn tại thì trả về một mảng chứa các object khác key kiểm tra, còn nếu không thì thêm object chứa key này vào mảng.
      if (isChecked) return selected.filter((value) => value !== key);
      else return [...prev, key];
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
