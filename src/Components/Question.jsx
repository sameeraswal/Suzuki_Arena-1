import React, { useState } from "react";
import Navbar from "./Navbar";
import Timer from "./Timer";
import { data } from "./data";
import { Modal } from "react-responsive-modal";
import { Link, useNavigate } from "react-router-dom";
import Finishround from "./Finish Round/Finishround";

const Question = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const { questions } = data;
  //id variable
  const { question, choices, video, id } = questions[activeQuestion];
 

  const [selectop, setSelectOp] = useState("#fff");

  //next question function
  const onClickNext = () => {
    //HTTP call

    setActiveQuestion((id) => id + 1);
  };

  //correct answer logic
  // const onAnswerSelected = (answer, index) => {
  //   setSelectedAnswerIndex(index)
  //   if (answer === correctAnswer) {
  //     setSelectedAnswer(true)
  //   } else {
  //     setSelectedAnswer(false)
  //   }
  // }

  const correctHandler = () => {
    setSelectOp("#00FF00");
    //save option id in var
  };
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <Navbar />
      <div className="round-box">Rounds</div>
      
      <div className="question-container">
        <Timer />

        {video && (
          <div className="question-video">
            {/* {console.log(v.video)} */}
            <iframe width="520" height="225" src={video}>
              .
            </iframe>
          </div>
        )}

        <div className="question-box">
          <div className="question-div ">
            <h2 key={id}>{question}</h2>
          </div>
          <div className="option-div">
            <ul>
              {choices.map((item, index) => (
                <>
                  {
                    <li
                      //value = cid
                      onClick={correctHandler}
                      className={selectedAnswerIndex === index ? "selected-answer icon-conatiner hvr-grow" : " icon-conatiner hvr-grow"}>
                      {/* className="selected-answer icon-conatiner hvr-grow" */}
                    >
                      {item.name}
                    </li>
                  }
                </>
              ))}
            </ul>
          </div>

          <div>
            {id !== 4 ? (
              <button
                onClick={onClickNext}
                className="third question-btn icon-conatiner"
              >
                Next
              </button>
            ) : (
              <>
                <Link to="/finish">
                  <button
                    
                    className="third question-btn icon-conatiner"
                  >
                    Next
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
