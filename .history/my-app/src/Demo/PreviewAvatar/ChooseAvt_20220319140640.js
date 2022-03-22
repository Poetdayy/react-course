import React, { useState } from "react";

const ChooseAvt = () => {
  const [avt, setAvt] = useState();

  const handleChange = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvt(file);
  };

  return (
    <div>
      <input onChange={handleChange} type="file" style={{ marginLeft: 100 }} />
      {avt && <img src={avt.preview} alt="" width="8500%" />}
    </div>
  );
};

export default ChooseAvt;
