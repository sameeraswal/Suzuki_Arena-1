import React from "react";
import Navbar from "../Navbar";
import Timermin from "./Timermin";
import stopwatch from "../stopwatch.svg";
import { useState, useEffect } from "react";
import "./timersection.css";
import Addinput from "../Addinputfields/Addinput";
import { Link } from "react-router-dom";
import bgImg1 from "../../Assets/Timer/01.png";

const Timersection = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(true);

  return (
    <div>
      <Navbar />
      <img src={bgImg1} alt="" className="background-image" />
      <div className=" bg-timer-section">
        <div
          className="round-box"
          style={{
            marginTop: "20px",
            position: "absolute",
            marginLeft: "40px",
          }}
        >
          Timer
        </div>
        
          <div className="timer-container">
            <Timermin />
          </div>

          <Link to="/puzzle">
            <button
              className="roll icon-conatiner score-correct"
              onClick={() => {
                setShow(true);
              }}
            >
              Enter Score
            </button>
          </Link>
       
        {/* )} */}
      </div>
    </div>
  );
};

export default Timersection;
