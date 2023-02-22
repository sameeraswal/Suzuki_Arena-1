import React, { useState } from "react";
import Navbar from "./Navbar";
import { data } from "./data";

const Question = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const { questions } = data;
  const { question, choices } = questions[activeQuestion];
  const [selectop, setSelectOp] = useState('#fff');
  const onClickNext = () => {
    setActiveQuestion((prev) => prev + 1);
  };

  const correctHandler = () => {
    setSelectOp('#B2FFB2');
  }

  return (
    <>
      <Navbar />
      <div className="question-container">
        <div className="question-video">
          <iframe
            width="320"
            height="215"
            src="https://www.youtube.com/embed/Q5ZpKQFcC0U"
          ></iframe>
        </div>
        <div className="question-box">
          <div className="question-div">
            <h2>{question}</h2>
          </div>
          <div className="option-div">
            <ul>
              {choices.map((item) => (
                <li onClick={correctHandler}   className="selected-answer icon-conatiner hvr-grow">{item}</li>
              ))}
            </ul>
          </div>

          <div >
            <button onClick={onClickNext} className="third question-btn icon-conatiner">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
