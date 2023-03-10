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

const Modalframmerj = ({ handleClose, text, type }) => {
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
    <h3>Judges Round- Guidelines</h3>
    <h5>
      <div>
        <div>◉</div>

        <div>
          One question would be asked to each participant by the Jury members.
          Average score would be considered as final marks for the round
        </div>
      </div>
      <div>
        <div>◉</div>

        <div>Total duration of Jury round is for 20 minutes</div>
      </div>
    </h5>
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <Link to="/enterscore7">
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

export default Modalframmerj;
