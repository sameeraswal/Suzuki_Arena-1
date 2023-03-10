import React, { useState } from "react";
import Navbar from "./Navbar";
// import enterscore from "./enterscore.jpeg";
import bgImg from "./scorebg.png";
import bgImg1 from "./score02.png";
import Finishmodal from "./Modalframmer/finishmodal";

import { motion, AnimatePresence } from "framer-motion";
import ModalFrammer from "./ModalFrammer";

import "./modalcss.css";
import Finishmodal3 from "./Modalframmer/finishmodal3";
import Finishmodalenter from "./Modalframmer/finishmodalenter";
import axios from "axios";
import { APIURL } from "../App";

const Enterscore = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };
  const [score, setScore] = useState("");

  const [show, setShow] = useState(false);
  const handleChangescore = (event) => {
    setScore(event.target.value);
  };
  const fetchData = () => {
    console.log(score,JSON.parse(localStorage.getItem("mspin")))
    axios
      .post(`${APIURL}/api/v1/round/submitScoreForRound`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundName: "6",
        score: score,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="enter-score-container">
        <img src={bgImg} alt="" className="score-bg-img" />
        <img src={bgImg1} alt="" className="vector-img" height={5} width={5} />
        {show && (
          <input
            type="text"
            placeholder="score"
            className="input-correct inputscore-btn"
            onChange={handleChangescore}
          />
        )}
        {/* {data && ( */}
        {/* <Link to="/puzzle"> */}
        <button
          className="third icon-conatiner btn-width scorepage-btn"
          onClick={() => {
            setShow(true);
          }}
        >
          Enter Score
        </button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="third question-btn icon-conatiner enter-score-finish-btn"
          onClick={() => {
            modalOpen ? close() : open();
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
            <Finishmodalenter modalOpen={modalOpen} handleClose={close} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Enterscore;
