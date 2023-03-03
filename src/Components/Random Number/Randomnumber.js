import React, { useState } from "react";
import "./randomnum.css";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

export default function Random() {
  // const [minVal, setMinVal] = useState(0);
  // const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState("");

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (18 - 1 + 1) + 1));
  };
  const timeOutFun = (e) => {
    setTimeout(() => window.open("/timersection","_self"), 2000);
    // console.log(title);
  };

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="randomNum">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Random Numer: <span>{randomNum}</span>
            </p>
          </div>

          <button
            onClick={() => {
              handleRandomNum();
              timeOutFun();
            }}
            className="icon-conatiner"
          >
            Get Random Numer
          </button>
        </div>
      </div>
    </>
  );
}
