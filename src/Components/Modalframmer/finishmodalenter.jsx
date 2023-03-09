import { useEffect } from "react";
import { motion } from "framer-motion";
import Backdrop from "./finishbackdrop";
import { stateLogger } from "../../stateLogger.js";
import { Link } from "react-router-dom";
import modalimg from "../Likethumb.webp";
import FinishBackdrop from "./finishbackdrop";
import FinishBackdrop1b from "./finishbackdrop1b";
import FinishBackdropenter from "./finishbackdropenter";

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

const Finishmodalenter = ({ handleClose, text, type }) => {
  // Log state
  useEffect(() => {
    stateLogger("Modal", true);
    return () => stateLogger("Modal", false);
  }, []);

  return (
    <FinishBackdropenter onClick={handleClose}>
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
    </FinishBackdropenter>
  );
};

const ModalText = () => (
  <div className="modal-text-enter hand-with-text-enter">
    <img src={modalimg} alt="" className="enter-hand" />
    <h5>Thank you for completing the round</h5>
    <br />
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <Link to="/login">
    <motion.button
      className="modal-button cls-btn finish-modal-btn"
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      Back to Home
    </motion.button>
  </Link>
);

export default Finishmodalenter;
