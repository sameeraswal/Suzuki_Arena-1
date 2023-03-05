import React from "react";
import wordpattern from "../wordpattern.jpg";
import Navbar from "../Navbar";
import "../Puzzlepage/Puzzlechoice";
import { useState } from "react";
import Buttonp from "../Puzzlepage/Buttonp";
import Buttonn from "../Puzzlepage/Buttonn";

const Puzzlequestion = () => {
  let response = {
    status: true,
    data: [
      {
        
        question: "Given a string, reverse each word in the sentence",
        
        btn1: 'yes',
        btn2: 'no'
      },
      {
       
        question: "Question 2 he sentence",
       
        btn1: 'yes',
        btn2: 'no'
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
        <div className="round-box-dashboard">Puzzle</div>
        <div className="puzzle-box">
          <div>
            {/* <img
              src={wordpattern}
              alt="pattern"
              height={400}
              width={400}
              className="puzzle-img"
              //   style={{ marginLeft: "37%", marginTop: "30px" }}
            /> */}
          </div>

          <div className="wordslct justify">
           

            {/* map */}
            {questions.map((item, i) => (
              <>
                <div className="wordyes">
                  <span key={i}>{item.question}</span>
                  <Buttonp key={i} name={item.btn1}/>
                  {/* <button
                    key={item.id}
                    onClick={() => handleColor(item)}
                    style={{
                      backgroundColor:
                        item.id === selected ? "#00ff00" : "#F0F0F0",
                    }}
                    className="yes-btn icon-conatiner"
                  >
                    {console.log(`${item.id} and selected is ${selected}`)}
                    Yes
                  </button> */}
                  <Buttonn key={i} name={item.btn2}/>
                  {/* <button
                    key={item.id+1}
                    className="yes-btn icon-conatiner"
                    onClick={() => handleColor1(item.cid)}
                    style={{
                      backgroundColor: item.cid === selected1 ? "red" : "#F0F0F0",
                    }}
                  >
                    No
                  </button> */}
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
