import React from "react";
import wordpattern from "../wordpattern.jpg";
import Navbar from "../Navbar";
import "../Puzzlepage/Puzzlechoice";
import { useState } from "react";
import Buttonp from "../Puzzlepage/Buttonp";
import Buttonn from "../Puzzlepage/Buttonn";
import './puzzleques.css'
import bgImg from '../leaderboardfinal/05.png'

const Puzzlequestion = () => {
  let response = {
    status: true,
    data: [
      {
        question: "Q.1} Given a string, reverse each word in the sentence",

        btn1: "YES",
        btn2: "NO",
      },
      {
        question: "Q.2} Given a string, reverse each word in the sentence",

        btn1: "YES",
        btn2: "NO",
      },
      {
        question: "Q.3} Question 2 he sentence reverse each word in the sentence",

        btn1: "YES",
        btn2: "NO",
      },
      {
        question: "Q.4} Which of the following keywords is used to define a variable in Javascript?",

        btn1: "YES",
        btn2: "NO",
      },
      {
        question: "Q.5} Which of the following keywords is used to define a variable in Javascript?",

        btn1: "YES",
        btn2: "NO",
      },
      {
        question: "Q.6} Which of the following keywords is used to define a variable in Javascript?",

        btn1: "YES",
        btn2: "NO",
      },
      {
        question: "Q.7} Which of the following keywords is used to define a variable in Javascript?",

        btn1: "YES",
        btn2: "NO",
      },
      {
        question: "Q.8} Which of the following keywords is used to define a variable in Javascript?",

        btn1: "YES",
        btn2: "NO",
      },
      {
        question: "Q.9} Which of the following keywords is used to define a variable in Javascript?",

        btn1: "YES",
        btn2: "NO",
      },
      {
        question: "Q.10} Which of the following keywords is used to define a variable in Javascript?",

        btn1: "YES",
        btn2: "NO",
      },
    ],
  };

  let questions = response.data;

  const timeOutFun = () => {
    setTimeout(() => window.open("/finish1b", "_self"), 3000);
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container full-height">
      <img src={bgImg} alt="" className="ques-bg"/>
        <div className="round-box-dashboard">Questions</div>
        
        <div className="puzzle-box">
          

          <div className="wordslct1">
            {/* map */}
            {questions.map((item, i) => (
              <>
                <div className="wordyes1">
                  <span key={i}>{item.question}</span>
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

export default Puzzlequestion;
