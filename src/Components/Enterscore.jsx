import React, { useState } from "react";
import Navbar from "./Navbar";
// import enterscore from "./enterscore.jpeg";
import bgImg from './scorebg.png'
import bgImg1 from './score02.png'

const Enterscore = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Navbar></Navbar>
      <div className="enter-score-container">
        <img src={bgImg} alt="" className="score-bg-img"/>
        <img src={bgImg1} alt="" className="vector-img" height={5} width={5} />
        {show && (
          <input type="text" placeholder="score" className="input-correct" className="inputscore-btn"/>
        )}
        {/* {data && ( */}
        {/* <Link to="/puzzle"> */}
        <button
          className="third icon-conatiner btn-width scorepage-btn"
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
