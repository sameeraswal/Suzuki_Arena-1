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
        name: "Word-1",
        btn1: "yes",
        btn2: "no",
      },
      {
        name: "Word-2",
        btn1: "yes",
        btn2: "no",
      },
      {
        name: "Word-3",
        btn1: "yes",
        btn2: "no",
      },
      {
        name: "Word-4",
        btn1: "yes",
        btn2: "no",
      },
      {
        name: "Word-5",
        btn1: "yes",
        btn2: "no",
      },
      {
        name: "Word-6",
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

                  <Buttonp key={i} name={item.btn1} />

                  <Buttonn key={i} name={item.btn2} />
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
