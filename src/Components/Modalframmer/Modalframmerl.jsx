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

const Modalframmerl = ({ handleClose, text, type }) => {
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
      >
        <ModalText text={text} />
        <ModalButton onClick={handleClose} label="Close" />
      </motion.div>
    </Backdrop>
  );
};

const ModalText = () => (
  <div className="modal-text">
    <h3>List the twist- Guidelines</h3>
    <h5>
      <div>
        <div>◉</div>

        <div>
          Question in the form of riddles will be displayed on the screen.
        </div>
      </div>
      <div>
        <div>◉</div>

        <div>
          Participant first to push buzzer gets a chance to answer ____Questions
          in ___ seconds for each participant that carries 1 mark per question
          Total duration of this round is 20 minutes
        </div>
      </div>
    </h5>
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <Link to="/enterscore6">
    {" "}
    <motion.button
      className="modal-button cls-btn"
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      Let's begin
    </motion.button>
  </Link>
);

export default Modalframmerl;
