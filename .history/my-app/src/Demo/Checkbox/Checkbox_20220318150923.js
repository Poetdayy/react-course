import React from "react";

const Checkbox = () => {
  return (
    <div>
      <div>
        <div className="radio-content">
          <h1>Bạn học trường nào? </h1>
          {school.map((item) => (
            <div key={item.key} style={{ fontSize: 30 }}>
              <input
                style={{ height: 20, width: 20, marginRight: 10 }}
                className="radio-box"
                type="radio"
                checked={item.key === isSelected}
                onChange={() => setIsSelected(item.key)}
              />
              {item.university}
            </div>
          ))}
          <button className="submit-button" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
<div>
  <div className="radio-content">
    <h1>Bạn học trường nào? </h1>
    {school.map((item) => (
      <div key={item.key} style={{ fontSize: 30 }}>
        <input
          style={{ height: 20, width: 20, marginRight: 10 }}
          className="radio-box"
          type="radio"
          checked={item.key === isSelected}
          onChange={() => setIsSelected(item.key)}
        />
        {item.university}
      </div>
    ))}
    <button className="submit-button" onClick={handleClick}>
      Submit
    </button>
  </div>
</div>;
