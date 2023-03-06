import { useEffect } from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";
import { stateLogger } from "../../stateLogger.js";
import { Link } from "react-router-dom";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ModalFrammerc = ({ handleClose, text, type }) => {
  // Log state
  useEffect(() => {
    stateLogger("Modal", true);
    return () => stateLogger("Modal", false);
  }, []);

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{height:"50%"}}
      >
        <ModalText text={text} />

        <ModalButton onClick={handleClose} label="Close" />
      </motion.div>
    </Backdrop>
  );
};

const ModalText = () => (
  <div className="modal-text">
    <h3>Chase The Maze- Guidelines</h3>
    <h5>
      ◉ Participants would roll the dice digitally
      <br />
      ◉ Participants to show dice number to the trainer
      <br />
      ◉ Participants would get puzzle paper as per dice number
      <br />
      ◉ Participant would read the tab and find the answer in the maze
      <br />◉ Number of questions is 6 and the duration of this round will
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br></br>
      &nbsp;&nbsp;&nbsp;&nbsp; be 1 minute per question.
      <br />◉ And each question carries 10 marks
    </h5>
  </div>
);

const ModalText1 = () => (
  <div className="modal-text">
    <h3>Chase The Maze - Guidelines</h3>
    <h5>
      ◉ First round will be based on images or videos in which 5 questions
      &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;would display as per randomizer. The
      duration of this round would be 1 &nbsp; &nbsp;&nbsp;&nbsp;minute per
      question
    </h5>
    <br />
    <h5>◉&nbsp; Each question carries 10 marks</h5>
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <Link to="/randomnum">
    {" "}
    <motion.button
      className="modal-button cls-btn"
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      Close
    </motion.button>
  </Link>
);

export default ModalFrammerc;
