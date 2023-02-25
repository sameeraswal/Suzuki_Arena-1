import React, { useState } from "react";
import Navbar from "./Navbar";
import Timer from "./Timer";
import { data } from "./data";
import Blankcomp from "./Blankcomp";
import ImageQuestion from "./ImageQuestion";
import wheel from './wheel-pointer.png'

const Question = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const { questions } = data;
  //id variable
  const { question, choices, video, id } = questions[activeQuestion];
  const { name, cID, src } = choices;

  const [selectop, setSelectOp] = useState("#fff");
  const onClickNext = () => {
    //HTTP call
    setActiveQuestion((id) => id + 1);
  };

  const correctHandler = () => {
    setSelectOp("#00FF00");
    //save option id in var
  };
  return (
    <>
      <Navbar />
      <div className="round-box">Rounds</div>
      {/* {video && ( */}
      <div className="question-container">
        <Timer />

        {video && (
          <div className="question-video">
            {/* {console.log(v.video)} */}
            <iframe width="520" height="225" src={video}>.</iframe>
          </div>
        )}

        <div className="question-box">
          <div className="question-div ">
            <h2 key={id}>{question}</h2>
          </div>
          <div className="option-div">
            <ul>
              {choices.map((item) => (
                <>
                  {!item.src ? (
                    <li
                      //value = cid
                      //onClick={correctHandler}//function with parameter

                      className="selected-answer icon-conatiner hvr-grow"
                    >
                      {item.name}
                    </li>
                  ) : (
                    <li
                      //value = cid
                      //onClick={correctHandler}//function with parameter

                      className="selected-answer icon-conatiner hvr-grow"
                    >
                      {item.name}
                     <img src={wheel} alt="" />
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>

          <div>
            <button
              onClick={onClickNext}
              className="third question-btn icon-conatiner"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
