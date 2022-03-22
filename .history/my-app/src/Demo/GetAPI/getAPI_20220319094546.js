import React from "react";


const GetAPI = () => {
  const tabs = {"post","comments","albums","photos","todos","users"}
  return (
    <div>
      <button style={{ margin: 50, heigth: 50, width: 100, cursor: "pointer" }}>
        Toogle
      </button>
      {tabs.map(tab => <button key={tab}>{tab}</button>)}
    </div>
  );
};

export default GetAPI;
