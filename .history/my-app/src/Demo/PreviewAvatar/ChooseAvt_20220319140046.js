import React from "react";

const ChooseAvt = () => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(URL.createObjectURL(file));
  };

  return (
    <div>
      <input onChange={handleChange} type="file" style={{ marginLeft: 100 }} />
    </div>
  );
};

export default ChooseAvt;
