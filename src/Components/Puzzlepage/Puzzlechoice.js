import React from "react";
import wordpattern from "../wordpattern.jpg";
import Navbar from "../Navbar";
import "./puzzlepage.css";
import { useState } from "react";
import Buttonp from "./Buttonp";
import Buttonn from "./Buttonn";

const Puzzlechoice = () => {
  let response = {
    status: true,
    data: [
      {
        class1: "green-btn",
        class2: "red-btn",
        btn1: "yes",
        btn2: "no",
      },
      {
        class1: "green-btn",
        class2: "red-btn",
        btn1: "yes",
        btn2: "no",
      },
      {
        class1: "green-btn",
        class2: "red-btn",
        btn1: "yes",
        btn2: "no",
      },
      {
        class1: "green-btn",
        class2: "red-btn",
        btn1: "yes",
        btn2: "no",
      },
    ],
  };

  let choices = response.data;

  const timeOutFun = () => {
    setTimeout(() => window.open("/finish1b", "_self"), 3000);
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container full-height">
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
            {/* map */}
            {choices.map((item, i) => (
              <>
                <div className="wordyes">
                  <span>{item.name}</span>

                  <Buttonp key={i} name={item.class1} />

                  <Buttonn key={i} name={item.class2} />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Puzzlechoice;
