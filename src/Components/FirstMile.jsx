import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const FirstMile = () => {
  return (
    <div>
      <Navbar />
      <Link to="/guideline">
        <h1 className="first-mile">The First Mile</h1>
      </Link>
    </div>
  );
};

export default FirstMile;
