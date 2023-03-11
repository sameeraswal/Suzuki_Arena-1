import { useEffect } from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";
import { stateLogger } from "../../stateLogger.js";
import { Link } from "react-router-dom";
import modalimg from "../modal1.jpeg";

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

const Modalframmeras = ({ handleClose, text, type }) => {
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
    <h3>Ask Express- Guidelines</h3>
    <h5>
      <div>
        <div>◉</div>

        <div>
        &nbsp;15 Questions in 60 seconds for each participant (1 mark per question)
        &nbsp;Participant has the option to answer or pass Total duration of this
        &nbsp;round is 25 minutes
        </div>
      </div>
      <div>
        <div>◉</div>

        <div>&nbsp;Each question carries 10 marks</div>
      </div>
    </h5>
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <Link to="/enterscore5">
    {" "}
    <motion.button
      className="modal-button cls-btn"
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      Let's Begin
    </motion.button>
  </Link>
);

export default Modalframmeras;
