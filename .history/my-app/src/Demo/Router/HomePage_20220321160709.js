import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <ul>
        <li>Movies</li>
        <li>Trending</li>
        <li>Abot</li>
      </ul>
      {/* <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes> */}
    </div>
  );
};

export default HomePage;
