import React from "react";
import Navbar from "../Navbar";
import Timermin from "./Timermin";
import { useState, useEffect } from "react";
import './timersection.css';

const Timersection = () => {
  

  return (
    <div>
      <Navbar />
      <div>
        <div className="round-box">Timer</div>
       
        <div className="timer-container">
        <Timermin/>
        </div>
      </div>
    </div>
  );
};

export default Timersection;
