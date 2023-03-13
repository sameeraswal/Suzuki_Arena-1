import React from "react";
import wordpattern from "../wordpattern.jpg";
import Navbar from "../Navbar";
import "../Puzzlepage/Puzzlechoice";
import { useState } from "react";
// import Buttonp from "../Puzzlepage/Buttonp";
import Buttonn from "../Puzzlequestionsrm/Buttonn";
import "./puzzleques.css";
import bgImg from "../leaderboardfinal/05.png";
import { motion, AnimatePresence } from "framer-motion";
import ModalFrammer from "../ModalFrammer";
import Finishmodal from "../Modalframmer/finishmodal";
import "../modalcss.css";
import Finishmodal3 from "../Modalframmer/finishmodal3";
import axios from "axios";
import bgImg1 from '../../Assets/Dice_BG.png';
import { APIURL } from "../../App";

let x = [0, 0, 0, 0, 0];
const Puzzlequestion = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };

  let response = {
    status: true,
    data: [
      {
        question:
          "Q.1) Enquired about users of the vehicle (drivers/occupants)",

        btn1: "YES",
        btn2: "NO",
        index: 0,
      },
      {
        question:
          "Q.2) Enquired about daily (regular)/ long (occasional) commute",

        btn1: "YES",
        btn2: "NO",
        index: 1,
      },
      {
        question:
          "Q.3) Asked about preferences (features wanted) in the new vehicle ",

        btn1: "YES",
        btn2: "NO",
        index: 2,
      },
      {
        question: "Q.4) Asked about considered competition",
        btn1: "YES",
        btn2: "NO",
        index: 3,
      },
      {
        question:
          "Q.5) Suggested the correct model and mentioned its  High 5 / 6 ",
        btn1: "YES",
        btn2: "NO",
        index: 4,
      },
    ],
  };

  const handleClick = (index) => {
    console.log("from click", index);
    x[index] = 1;
    console.log("array", x);
  };

  const handleClick1 = (index) => {
    console.log("from click", index);
    x[index] = 0;
    console.log("array", x);
  };

  let questions = response.data;

  const timeOutFun = () => {
    setTimeout(() => window.open("/finish1b", "_self"), 3000);
  };
  let count = 0;
  let newCount;

  const noOfCount = (count) => {
    for (let i = 0; i < x.length; i++) {
      if (x[i] === 1) {
        count++;
      }
      console.log(x[i], "xx[i]");
      console.log(count);
    }
    newCount = count * 10;
    console.log(newCount, "newCount");
  };
  const fetchData = () => {
    // console.log(score, JSON.parse(localStorage.getItem("mspin")));
    axios
      .post(`${APIURL}/api/v1/round/submitScoreForRound`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundName: "3",
        score: newCount,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />

      
        <img src={bgImg1} alt="" className="background-image" />
        <div className="round-box">Questions</div>

        <div className="puzzle-box">
          <div className="wordslct1">
            {/* map */}
            {questions.map((item, i) => (
              <>
                <div className="wordyes1">
                  <span key={i}>{item.question}</span>

                  <Buttonn
                    key={i}
                    index={item.index}
                    name1={item.btn1}
                    name2={item.btn2}
                    handleClick={handleClick}
                    handleClick1={handleClick1}
                  />
                </div>
              </>
            ))}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="roll icon-conatiner sbt-btn"
              onClick={() => {
                modalOpen ? close() : open();
                noOfCount(count);
                fetchData();
              }}
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
                <Finishmodal3 modalOpen={modalOpen} handleClose={close} />
              )}
            </AnimatePresence>
          </div>
        </div>
      
    </>
  );
};

export default Puzzlequestion;
