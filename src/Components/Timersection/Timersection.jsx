import React from "react";
import Navbar from "../Navbar";
import Timermin from "./Timermin";
import stopwatch from "../stopwatch.svg";
import { useState, useEffect } from "react";
import "./timersection.css";
import Addinput from "../Addinputfields/Addinput";

const Timersection = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="round-box">Timer</div>

        <div className="timer-container">
          <Timermin />
          <img
            src={stopwatch}
            alt="stop"
            height={50}
            width={50}
            style={{
              marginTop: "-90px",
              marginLeft: "250px",
              position: "absolute",
            }}
          />
         
        </div>
      </div>
    </div>
  );
};

export default Timersection;
