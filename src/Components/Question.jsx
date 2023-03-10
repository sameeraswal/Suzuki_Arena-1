import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Timer from "./Timer";

import { motion, AnimatePresence } from "framer-motion";
import ModalFrammer from "./ModalFrammer";
import "./modalcss.css";
import Finishmodal from "./Modalframmer/finishmodal";
import axios from "axios";
import { APIURL } from "../App";
import { bgImg } from "./NewImages/Spin-Wheel_BG.png";

const Question = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const imgsrc = require("./stop.png");

  // timer
  const Ref = useRef(null);

  const [timer, setTimer] = useState("01:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("01:00");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };
  const [activeQuestion, setActiveQuestion] = useState(0);

  // const [func, setFunc] = useState(true);
  const ref = useRef(null);
  // const handleClick = (event) => {
  //   console.log(func);
  //   func
  //     ? (event.target.style.background = "#00ff00")
  //     : (event.target.style.background = "#fff");
  //   setFunc(!func);
  //   // event.target.style.background = "#fff";
  // };
  const [openModel, setOpenModal] = useState(true);

  const handleToggleClasslistRef = (ref) => {
    if (!ref.current) {
      return;
    }
    if (!ref.current.classList.contains("question-option-color")) {
      ref.current.classList.add("question-option-color");
    } else {
      ref.current.classList.remove("question-option-color");
      ref.current = null;
    }
  };

  let [i, setI] = useState([]);
  let [c, setC] = useState([]);
  let [v, setV] = useState([]);
  let [rn, setRN] = useState([]);
  let [cid, setCID] = useState(0);

  let [question, setQuestion] = useState("");

  useEffect(() => {
    // alert("Page is running");

    axios
      .get(`${APIURL}/api/v1/quiz/roundname/1-A`)
      .then((res) => {
        // console.log(res.data.data[0].questions.sort(() => Math.random() - 0.5));
        console.log(res.data.data[0].questions[activeQuestion], "data");
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
        setRN(res.data.data[0].questions[activeQuestion]);
        setCID(res.data.data[0].questions[activeQuestion].choices);
        // console.log(res.data.data[0].questions[activeQuestion], "ID ");
      })
      .catch((error) => console.log(error, "error is here"));
  }, [activeQuestion]);
  const [mspin, setMspin] = useState("");
  const [regno, setRegno] = useState("");

  useEffect(() => {
    const mspin = JSON.parse(localStorage.getItem("mspin"));
    const regno = JSON.parse(localStorage.getItem("regNo"));

    if (mspin) {
      setMspin(mspin);
    }
    if (regno) {
      setRegno(regno);
    }
  }, []);

  const fetchAnswer = () => {
    axios
      .post(`${APIURL}/api/v1/round/submitanswer`, {
        mspin: mspin,
        roundName: "1-A",
        questionId: i,
        cId: cid,
      })
      .then((res) => {
        console.log(res, "Response");
        // setStatus(res.data.status);
      })
      .catch((error) => console.log(error));
  };

  // {
  //   console.log(cid, "CID is changing");
  // }
  const onClickNext = () => {
    //HTTP call

    setActiveQuestion((i) => i + 1);
    console.log(activeQuestion);
    handleToggleClasslistRef(ref);
  };
  return (
    <>
      <Navbar />

      <div className="round-box">Round 1-A</div>

      <div className="question-container">
        <div className="ques-number">{`${activeQuestion + 1}/5`}</div>
        {/* <Timer setOpenModal={setOpenModal}/> */}
        <div className="timer-div">
          <h2>{timer}</h2>
          <img src={imgsrc} alt="" className="clock-img" />
        </div>
        <div>
          {timer === "00:00" && openModel && (
            <>
              <div
                className="modalBackground"
                style={{ zIndex: "1", marginLeft: "-10%" }}
              >
                <div className="modalContainer">
                  <div className="titleCloseBtn">
                    <button
                      style={{
                        position: "absolute",
                        color: "red",
                        fontSize: "30px",
                      }}
                      onClick={() => {
                        setOpenModal(false);
                      }}
                    ></button>
                  </div>
                  <div className="title">
                    <h1 style={{ color: "blue" }}>
                      Time's up! Click on continue to move to next question
                    </h1>
                  </div>
                  <div className="footer">
                    <button
                      onClick={() => {
                        setOpenModal(false);
                        onClickNext();
                        fetchAnswer();
                        onClickReset();
                      }}
                      id="cancelBtn"
                      className="third icon-conatiner"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
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
                      onClick={(event) => {
                        handleToggleClasslistRef(ref);
                        event.stopPropagation();
                        ref.current = event.target;
                        handleToggleClasslistRef(ref);
                        setCID(item.cId);
                      }}
                      className="icon-conatiner"
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
            {activeQuestion !== 4 ? (
              <button
                onClick={() => {
                  onClickNext();
                  fetchAnswer();
                  onClickReset();
                }}
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
                    <Finishmodal
                      modalOpen={modalOpen}
                      handleClose={close}
                      roundName={"1-A"}
                    />
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
