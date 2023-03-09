import { React, useEffect, useState } from "react";
import FlippableCard from "../FlippableCard";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
// import Remaincard from "./Remaincard";
import bgImg from "../leaderboardfinal/05.png";
import Popupquestion from "../flipcard popup/Popupquestion";
import { motion, AnimatePresence } from "framer-motion";
import Finishmodal1b from "../Modalframmer/finishmodal1b";

const Altovskwid = () => {
  const [count, setCount] = useState(5);
  const [openModal, setOpenModal] = useState(false);

  let response = {
    status: true,
    data: [
      {
        id: 0,
        cardName: "Height",
        class: "front-icon1",
        classBack: "back-1",
        isCorrect: true,
      },
      {
        id: 1,
        cardName: "Length",
        class: "front-icon2",
        classBack: "back-2",
        isCorrect: false,
      },
      {
        id: 2,
        cardName: "Power",
        class: "front-icon3",
        classBack: "back-3",
        isCorrect: false,
      },
      {
        id: 3,
        cardName: "Torque",
        class: "front-icon4",
        classBack: "back-4",
        isCorrect: true,
      },
      {
        id: 4,
        cardName: "Bootspace",
        class: "front-icon5",
        classBack: "back-5",
        isCorrect: true,
      },
      {
        id: 5,
        cardName: "Mileage",
        class: "front-icon6",
        classBack: "back-6",
        isCorrect: true,
      },
      {
        id: 6,
        cardName: "Width",
        class: "front-icon7",
        classBack: "back-7",
        isCorrect: true,
      },
      {
        id: 7,
        cardName: "Wheelbase",
        class: "front-icon8",
        classBack: "back-8",
        isCorrect: false,
      },
      {
        id: 8,
        cardName: "Engine",
        class: "front-icon9",
        classBack: "back-9",
        isCorrect: false,
      },
      {
        id: 9,
        cardName: "FTC",
        class: "front-icon10",
        classBack: "back-10",
        isCorrect: true,
      },
    ],
  };

  // useEffect(() => {
  //    setCount(count-1);
  // }, [count])

  let cards = response.data;
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Navbar></Navbar>
      <img src={bgImg} alt="" className="flip-bg" />
      <div className="round-box bg-correct">Alto K10 VXi+ Vs Kwid RXT</div>
      <div className="flex-container bg-correct">
        <div className="remain-container bg-correct">
          <p>Cards</p>
          <p>Remaining: {count}</p>
        </div>

        <div className="flex-container-child bg-correct">
          {cards.map((item) => (
            <>
              <div
                className="flex-child bg-correct"
                onClick={() => {
                  {
                    count > 0 ? setCount(count - 1) : setCount(0);
                  }
                  setOpenModal(!item.isCorrect);
                }}
              >
                <FlippableCard title={item} />
              </div>
              {openModal && !item.isCorrect && (
                <Popupquestion setOpenModal={setOpenModal} />
              )}
            </>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="roll icon-conatiner finish-btn"
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
              <Finishmodal1b
                modalOpen={modalOpen}
                handleClose={close}
                roundName={"2"}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Altovskwid;
