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

const ModalFrammers = ({ handleClose, text, type }) => {
  // Log state
  useEffect(() => {
    stateLogger("Modal", true);
    return () => stateLogger("Modal", false);
  }, []);

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        className="modal orange-gradient resp-tablet-b-s-s-p"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        
      >
        <ModalText text={text} />
        <ModalButton onClick={handleClose} label="Close" />
      </motion.div>
    </Backdrop>
  );
};

const ModalText = () => (
  <div className="modal-text">
    <h3>Bespoke - Sales Pitch</h3>
    <h5>
      <div>
        <div>◉</div>

        <div>
          {" "}
          Throw of Dice: To get a random scenario that carries 15 marks
        </div>
      </div>
      <div>
        <div>◉</div>
        <div>
          Participant would be given a scenario with a specific customer
          profile, including his/her usage & needs
        </div>
      </div>
      <div>
        <div>◉</div>
        <div>Stage 1: Self + Brand Introduction Pitch</div>
      </div>
      <div>
        <div>◉</div>
        <div>Stage 2: Understanding of Customers' Needs & Aspirations</div>
      </div>
      <div>
        <div>◉</div>
        <div>The duration of this scenario is 10 minutes</div>
      </div>
    </h5>
  </div>
);

const ModalText1 = () => (
  <div className="modal-text">
    <h3>Bespoke - Sales Pitch</h3>
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
  <Link to="/dice">
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

export default ModalFrammers;
