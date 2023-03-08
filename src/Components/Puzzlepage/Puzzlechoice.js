import React from "react";
import wordpattern from "../Puzzleanswer.png";
import Navbar from "../Navbar";
import "./puzzlepage.css";
import { useState } from "react";
import Buttonp from "./Buttonp";
import Buttonn from "./Buttonn";
import Finishmodal from "../Modalframmer/finishmodal";
import { motion, AnimatePresence } from "framer-motion";



// import ModalFrammer from "./ModalFrammer";
import "../modalcss.css";
import Finishmodal1b from "../Modalframmer/finishmodal1b";

const Puzzlechoice = () => {
  
  
  let response = {
    status: true,
    data: [
      {
        name: "Word-1",
        btn1: "YES",
        btn2: "NO",
      },
      {
        name: "Word-2",
        btn1: "YES",
        btn2: "NO",
      },
      {
        name: "Word-3",
        btn1: "YES",
        btn2: "NO",
      },
      {
        name: "Word-4",
        btn1: "YES",
        btn2: "NO",
      },
      {
        name: "Word-5",
        btn1: "YES",
        btn2: "NO",
      },
      {
        name: "Word-6",
        btn1: "YES",
        btn2: "NO",
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

  const timeOutFun = () => {
    setTimeout(() => window.open("/finish1b", "_self"), 3000);
  };

  return (
    <>
    
      <Navbar />
     
      <div className="dashboard-container full-height">
        <div className="round-box-dashboard">Puzzle</div>
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
                <div className="wordyes" >
                  <span>{item.name}</span>
                  
                  <Buttonp key={i} name1={item.btn1} name2={item.btn2}/>

                 
                </div>
              </>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="third icon-conatiner finish-btn"
              onClick={() => (modalOpen ? close() : open())}
            >
              Finish Round
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
                <Finishmodal1b modalOpen={modalOpen} handleClose={close} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Puzzlechoice;
