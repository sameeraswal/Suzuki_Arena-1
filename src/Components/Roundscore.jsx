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

const Roundscore = () => {
  const [score, setScore] = useState("");
  const [mspin, setMSPIN] = useState("");


  const [show, setShow] = useState(false);
  const handleChangescore = (event) => {
    setScore(event.target.value);
  };

  const handleChangesmspin = (event) => {
    setMSPIN(event.target.value);
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
        mspin: mspin,
        roundName: value,
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
        mspin: score,
        roundName: value,
      })
      .then((res) => {
        console.log(JSON.parse(localStorage.getItem("mspin")), "MSPIN");
        console.log(res, "Response of roundlist");
      })
      .catch((error) => console.log(error.response.data.message));
  };
  //   let res = this.menu.value;
  const getInitialState = () => {
    const value = "1-A";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Navbar></Navbar>
      <img src={bgImg} alt="" className="background-image" />
      <div className="">
        <h1 className="score-text">Enter score</h1>

        <input
          type="text"
          placeholder="MSPIN"
          className="input-crct input-round-mspin"
          onChange={handleChangesmspin}
        />
         <input
          type="text"
          placeholder="SCORE"
          className="input-crct input-round-score"
          onChange={handleChangescore}
        />

        <select value={value} onChange={handleChange} className="drop-down-btn">
          <option value="1-A">1-A</option>
          <option value="1-B">1-B</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
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

      <>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="roll icon-conatiner finish-score-btn finish-round-btn"
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

export default Roundscore;
