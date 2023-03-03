import React, { useState } from "react";
import Navbar from "./Navbar";
import enterscore from "./enterscore.jpeg";

const Enterscore = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Navbar></Navbar>
      <div className="enter-score-container">
        <img src={enterscore} alt="" height={200} width={250} />
        {show && (
          <input type="text" placeholder="score" className="input-correct" />
        )}
        {/* {data && ( */}
        {/* <Link to="/puzzle"> */}
        <button
          className="third icon-conatiner btn-width"
          onClick={() => {
            setShow(true);
          }}
        >
          Enter Score
        </button>
      </div>
    </div>
  );
};

export default Enterscore;
