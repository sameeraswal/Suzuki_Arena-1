import React from "react";
import Navbar from "./Navbar";

const Randomizer = () => {
  return (
    <div>
      <Navbar></Navbar>
      <p>Randomizer to select question set</p>
      <div className="round-box">
        <h1>Choose One</h1>
      </div>
      <div className="btn-flex">
        <button className="btn-decor">Spin Wheel</button>
        <button className="btn-decor">Roll Dice</button>
      </div>
    </div>
  );
};

export default Randomizer;
