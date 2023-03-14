import React, { useState } from "react";
import Navbar from "./Navbar";
// import enterscore from "./enterscore.jpeg";

import Finishmodal from "./Modalframmer/finishmodal";

import { motion, AnimatePresence } from "framer-motion";
import ModalFrammer from "./ModalFrammer";

import "./modalcss.css";
import Finishmodal3 from "./Modalframmer/finishmodal3";
import Finishmodalenter from "./Modalframmer/finishmodalenter";
import axios from "axios";
import { APIURL } from "../App";
import { Link } from "react-router-dom";
import bgImg from "../Assets/Enter-Score.png";

const Enterscore2 = () => {
  const [score, setScore] = useState("");

  const [show, setShow] = useState(false);
  const handleChangescore = (event) => {
    setScore(event.target.value);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };

  const fetchData = () => {
    console.log(score, JSON.parse(localStorage.getItem("mspin")));
    axios
      .post(`${APIURL}/api/v1/round/submitScoreForRound`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundName: "5",
        score: score,
        // questionId: 1+1(index+1) //todo replce in case study Flipcard
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  const getData = () => {
    axios
      .post(`${APIURL}/api/v1/finishround`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundName: "5",
      })
      .then((res) => {
        console.log(JSON.parse(localStorage.getItem("mspin")), "MSPIN");
        console.log(res, "Response of roundlist");
      })
      .catch((error) => console.log(error.response.data.message));
  };
  return (
    <div>
      <Navbar></Navbar>
      <img src={bgImg} alt="" className="background-image" />
      <div className="">
        <h1 className="score-text">Enter score</h1>

        {show && (
          <input
            type="text"
            placeholder="score"
            className="input-correct1 input-crct"
            onChange={handleChangescore}
          />
        )}
      </div>
      {/* <button
          className="roll icon-conatiner finish-card finish-btn-enter-score"
          onClick={() => {
            fetchData();
            getData();
          }}
        >
          Finish Round
        </button> */}
      <button
        className="roll icon-conatiner inputscore-btn1"
        onClick={() => {
          setShow(true);
        }}
      >
        Enter Score
      </button>

      
        <>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="roll icon-conatiner finish-score-btn"
            onClick={() => {
              modalOpen ? close() : open();
              fetchData();
              getData();
            }}
          >
            Finish Round
          </motion.button>

          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            // Fires when all exiting nodes have completed animating out
            onExitComplete={() => null}
          >
            {modalOpen && (
              <Finishmodalenter modalOpen={modalOpen} handleClose={close} />
            )}
          </AnimatePresence>
        </>
      
    </div>
  );
};

export default Enterscore2;
