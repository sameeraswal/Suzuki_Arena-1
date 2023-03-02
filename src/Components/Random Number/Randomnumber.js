import React, { useState } from "react";
import "./randomnum.css";

export default function Random() {
  // const [minVal, setMinVal] = useState(0);
  // const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState('');

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (18 - 1 + 1) + 1));
  };

  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>
            Random Numer:  <span>{randomNum}</span>
          </p>
        </div>
        
        <button onClick={handleRandomNum}>Get Random Numer</button>
      </div>
    </div>
  );
}