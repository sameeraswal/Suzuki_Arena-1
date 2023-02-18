import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/wheel">
          <button className="btn-decor">Spin Wheel</button>
        </Link>
        <Link to="/dice">
          <button className="btn-decor">Roll Dice</button>
        </Link>
      </div>
    </div>
  );
};

export default Randomizer;
