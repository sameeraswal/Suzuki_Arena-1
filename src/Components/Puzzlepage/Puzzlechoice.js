import React from "react";
import wordpattern from "../wordpattern.jpg";
import Navbar from "../Navbar";
import "./puzzlepage.css";
import { useState } from "react";

const Puzzlechoice = () => {
  const timeOutFun = () => {
    setTimeout(() => window.open("/finish1b", "_self"), 3000);
  };
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);
  const [active8, setActive8] = useState(false);
  const [active9, setActive9] = useState(false);
  const [active10, setActive10] = useState(false);
  const [active11, setActive11] = useState(false);
  const [active12, setActive12] = useState(false);
  const handleClick1 = () => {
    setActive1(!active1);
  };
  const handleClick2 = () => {
    setActive2(!active2);
  };
  const handleClick3 = () => {
    setActive3(!active3);
  };
  const handleClick4 = () => {
    setActive4(!active4);
  };
  const handleClick5 = () => {
    setActive5(!active5);
  };
  const handleClick6 = () => {
    setActive6(!active6);
  };
  const handleClick7 = () => {
    setActive7(!active7);
  };
  const handleClick8 = () => {
    setActive8(!active8);
  };
  const handleClick9 = () => {
    setActive9(!active9);
  };
  const handleClick10 = () => {
    setActive10(!active10);
  };
  const handleClick11 = () => {
    setActive11(!active11);
  };
  const handleClick12 = () => {
    setActive12(!active12);
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container ">
        <div className="round-box-dashboard">Puzzle</div>
        <div className="puzzle-box">
          <div>
            <img
              src={wordpattern}
              alt="pattern"
              height={400}
              width={400}
              className="puzzle-img"
              //   style={{ marginLeft: "37%", marginTop: "30px" }}
            />
          </div>

          <div className="wordslct">
            <div className="wordyes">
              <span>Word 1</span>
              <button
                onClick={handleClick1}
                style={{ backgroundColor: active1 ? "#00ff00" : "#F0F0F0" }}
                className="yes-btn icon-conatiner"
              >
                Yes
              </button>
              <button
                className="yes-btn icon-conatiner"
                onClick={!active1 && handleClick2}
                style={{ backgroundColor: active2 ? "red" : "#F0F0F0" }}
              >
                No
              </button>
            </div>
            <div className="wordyes">
              <span>Word 2</span>
              <button
                className="yes-btn icon-conatiner"
                onClick={handleClick3}
                style={{ backgroundColor: active3 ? "#00ff00" : "#F0F0F0" }}
              >
                Yes
              </button>
              <button
                className="yes-btn icon-conatiner"
                onClick={handleClick4}
                style={{ backgroundColor: active4 ? "red" : "#F0F0F0" }}
              >
                No
              </button>
            </div>
            <div className="wordyes">
              <span>Word 3</span>
              <button
                className="yes-btn icon-conatiner"
                onClick={handleClick5}
                style={{ backgroundColor: active5 ? "#00ff00" : "#F0F0F0" }}
              >
                Yes
              </button>
              <button
                className="yes-btn icon-conatiner"
                onClick={handleClick6}
                style={{ backgroundColor: active6 ? "red" : "#F0F0F0" }}
              >
                No
              </button>
            </div>
            <div className="wordyes">
              <span>Word 4</span>
              <button
                className="yes-btn icon-conatiner"
                onClick={handleClick7}
                style={{ backgroundColor: active7 ? "#00ff00" : "#F0F0F0" }}
              >
                Yes
              </button>
              <button
                className="yes-btn icon-conatiner"
                onClick={handleClick8}
                style={{ backgroundColor: active8 ? "red" : "#F0F0F0" }}
              >
                No
              </button>
            </div>
            <div className="wordyes">
              <span>Word 5</span>
              <button
                className="yes-btn icon-conatiner"
                onClick={handleClick9}
                style={{ backgroundColor: active9 ? "#00ff00" : "#F0F0F0" }}
              >
                Yes
              </button>
              <button
                className="yes-btn icon-conatiner"
                onClick={handleClick10}
                style={{ backgroundColor: active10 ? "red" : "#F0F0F0" }}
              >
                No
              </button>
            </div>
            <div className="wordyes">
              <span>Word 6</span>

              <button
                className="yes-btn icon-conatiner"
                onClick={() => {
                  handleClick11();
                  timeOutFun();
                }}
                style={{ backgroundColor: active11 ? "#00ff00" : "#F0F0F0" }}
              >
                Yes
              </button>
              <button
                className="yes-btn icon-conatiner"
                onClick={() => {
                  handleClick12();
                  timeOutFun();
                }}
                style={{ backgroundColor: active12 ? "red" : "#F0F0F0" }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Puzzlechoice;
