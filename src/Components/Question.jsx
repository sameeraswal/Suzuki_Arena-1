import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Timer from "./Timer";
import { data } from "./data";

import { motion, AnimatePresence } from "framer-motion";
import ModalFrammer from "./ModalFrammer";
import "./modalcss.css";
import Finishmodal from "./Modalframmer/finishmodal";
import axios from "axios";
import { APIURL } from "../App";

const Question = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };
  const [activeQuestion, setActiveQuestion] = useState(0);
  // const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  // const { questions } = data;
  //id variable

  // const [selectop, setSelectOp] = useState("#fff");

  //next question function

  const [func, setFunc] = useState(true);
  const handleClick = (event) => {
    console.log(func);
    func
      ? (event.target.style.background = "#00ff00")
      : (event.target.style.background = "#fff");
    setFunc(!func);
    // event.target.style.background = "#fff";
  };
  // const correctHandler = () => {
  //   setSelectOp("#00FF00");
  //   //save option id in var
  // };
  // let q, i, c, v;
  let [i, setI] = useState([]);
  let [c, setC] = useState([]);
  let [v, setV] = useState([]);

  let [question, setQuestion] = useState("");
  useEffect(() => {
    // alert("Page is running");
    axios
      .get(`${APIURL}/api/v1/roundname/1-A`)
      .then((res) => {
        // setRounds(res.data.data[0].questions);
        console.log(res.data.data[0].questions[activeQuestion] , "data");
        setQuestion(res.data.data[0].questions[activeQuestion].question);
        console.log(question);
        
        // const { question, choices, video, id } = question;
        // setQ(question);
        // console.log(question, "Question");
        setI(res.data.data[0].questions[activeQuestion].questionId);
        // console.log(id, "ID");
        setC(res.data.data[0].questions[activeQuestion].choices);
        // console.log(choices, "Choices");
        setV(res.data.data[0].questions[activeQuestion].questionUrl);
        console.log(res.data.data[0].questions[activeQuestion].questionId, "ID ");
      })
      .catch((error) => console.log(error, "error is here"));
  }, []);

  const onClickNext = () => {
    //HTTP call
    
    setActiveQuestion((i) => i + 1);
  };
  return (
    <>
      <Navbar />
      <div className="round-box">Rounds</div>

      <div className="question-container">
        <div className="ques-number">{`${activeQuestion + 1}/5`}</div>
        <Timer />

        {v && (
          <div className="question-video">
            {/* {console.log(v.video)} */}
            <iframe width="520" height="225" src={v}></iframe>
          </div>
        )}

        <div className="question-box">
          <div className="question-div ">
            <h2 key={i}>{question}</h2>
          </div>
          <div className="option-div">
            <ul>
              {c.map((item) => (
                <>
                  {
                    <li
                      //value = cid
                      onClick={handleClick}
                      className="icon-conatiner hvr-grow"
                    >
                      {item.name}
                    </li>
                  }
                </>
              ))}
            </ul>
          </div>

          {/* modal */}
          <div>
            {i !== 4 ? (
              <button
                onClick={onClickNext}
                className="third question-btn icon-conatiner"
              >
                Submit
              </button>
            ) : (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="third question-btn icon-conatiner"
                  onClick={() => (modalOpen ? close() : open())}
                >
                  Submit
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
