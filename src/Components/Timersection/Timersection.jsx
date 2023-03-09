import React from "react";
import Navbar from "../Navbar";
import Timermin from "./Timermin";
import stopwatch from "../stopwatch.svg";
import { useState, useEffect } from "react";
import "./timersection.css";
import Addinput from "../Addinputfields/Addinput";
import { Link } from "react-router-dom";

const Timersection = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(true);
  const timeOutFun = (e) => {
    setTimeout(() => window.open("/puzzle","_self"), 9000);
    // console.log(title);
  };

  return (
    <div>
      <Navbar />
      <div className=" bg-timer-section">
        <div className="round-box" style={{marginTop:"20px", position:"absolute", marginLeft:"40px"}}>Timer</div>
        <div className="">
          <div className="timer-container">
            <Timermin />
            {/* <img
              src={stopwatch}
              alt="stop"
              height={50}
              width={50}
              style={{
                marginTop: "-90px",
                marginLeft: "250px",
                position: "absolute",
              }}
            /> */}
          </div>
  
          {/* {data && ( */}
          <Link to="/puzzle">
          <button
            className="third icon-conatiner btn-width"
            onClick={() => {
              setShow(true);
              timeOutFun();
            }}
          >
            Enter Score
          </button>
          </Link>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Timersection;
