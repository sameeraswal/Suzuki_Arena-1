import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Randomizer = () => {
  // const wheelImg = require('')
  return (
    <div>
      <Navbar></Navbar>
      
      <div className="round-box">
        <h3>Choose One</h3>
      </div>
      <div className="btn-flex">
        <Link to="/wheel">
          <button className="btn-decor third icon-conatiner">Spin Wheel</button>
        </Link>
        <Link to="/dice">
          <button className="btn-decor third icon-conatiner">Roll Dice</button>
        </Link>
      </div>
    </div>
  );
};

export default Randomizer;
