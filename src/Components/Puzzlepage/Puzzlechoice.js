import React, { useEffect } from "react";
import wordpattern from "./WhatsApp Image 2023-03-11 at 18.53.10.jpeg";
import Navbar from "../Navbar";
import "./puzzlepage.css";
import { useState } from "react";
import Buttonp from "./Buttonp";
import Buttonn from "../Puzzle4/Buttonn";
import Finishmodal from "../Modalframmer/finishmodal";
import { motion, AnimatePresence } from "framer-motion";

// import ModalFrammer from "./ModalFrammer";
import "../modalcss.css";
import Finishmodal1b from "../Modalframmer/finishmodal1b";
import axios from "axios";
import { APIURL } from "../../App";

let x = [0, 0, 0, 0, 0, 0];
function randomnum() {
  const random = localStorage.getItem("random");
  return random;
}

const Puzzlechoice = () => {
  const [num, setNum] = useState(randomnum);

  let response = {
    status: true,
    data: [
      {
        name: "Word-1",
        btn1: "YES",
        btn2: "NO",
        index: 0,
      },
      {
        name: "Word-2",
        btn1: "YES",
        btn2: "NO",
        index: 1,
      },
      {
        name: "Word-3",
        btn1: "YES",
        btn2: "NO",
        index: 2,
      },
      {
        name: "Word-4",
        btn1: "YES",
        btn2: "NO",
        index: 3,
      },
      {
        name: "Word-5",
        btn1: "YES",
        btn2: "NO",
        index: 4,
      },
      {
        name: "Word-6",
        btn1: "YES",
        btn2: "NO",
        index: 5,
      },
    ],
  };

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };

  let choices = response.data;

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

  let count=0;
  let newCount;
  
  const noOfCount = (count) => {
    for (let i = 0; i < x.length; i++) {
      if (x[i] === 1) {
        count++;
      }
      console.log(x[i], "xx[i]")
      console.log(count);
    }
    newCount=count*10;
    console.log(newCount,"newCount")
  };
  const fetchData = () => {
    // console.log(score, JSON.parse(localStorage.getItem("mspin")));
    axios
      .post(`${APIURL}/api/v1/round/submitScoreForRound`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundName: "1-B",
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

      <div className="dashboard-container full-height">
        <div className="round-box-dashboard">Puzzle - {num}</div>
        <div className="puzzle-box">
          <div>
            <img
              src={wordpattern}
              alt="pattern"
              height={400}
              width={400}
              className="puzzle-img"
              //   style={{ marginLeft: "37%", marginTop: "30px" }}
            />
          </div>

          <div className="wordslct">
            {/* map */}
            {choices.map((item, i) => (
              <>
                <div className="wordyes">
                  <span>{item.name}</span>

                  <Buttonp
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
              className="roll icon-conatiner finish-btn"
              onClick={() => {
                modalOpen ? close() : open();
                noOfCount(count);
                fetchData();
              }}
            >
              Finish
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
                <Finishmodal1b
                  modalOpen={modalOpen}
                  handleClose={close}
                  roundName={"1-B"}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Puzzlechoice;
