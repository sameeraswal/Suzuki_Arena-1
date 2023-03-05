import React, { useState } from "react";
import Navbar from "./Navbar";
import Timer from "./Timer";
import { data } from "./data";

import { motion, AnimatePresence } from "framer-motion";
import ModalFrammer from "./ModalFrammer";
import "./modalcss.css";
import Finishmodal from "./Modalframmer/finishmodal";

const Question = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };
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
  // const [open, setOpen] = useState(false);

  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);

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
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="third question-btn icon-conatiner"
                  onClick={() => (modalOpen ? close() : open())}
                >
                  Next
                </motion.button>

                <AnimatePresence
                  // Disable any initial animations on children that
                  // are present when the component is first rendered
                  initial={false}
                  // Only render one component at a time.
                  // The exiting component will finish its exit
                  // animation before entering component is rendered
                  exitBeforeEnter={true}
                  // Fires when all exiting nodes have completed animating out
                  onExitComplete={() => null}
                >
                  {modalOpen && (
                    <Finishmodal modalOpen={modalOpen} handleClose={close} />
                  )}
                </AnimatePresence>

                {/* <Link to="/finish">
                  <button
                    
                    className="third question-btn icon-conatiner"
                  >
                    
                  </button>
                </Link> */}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
