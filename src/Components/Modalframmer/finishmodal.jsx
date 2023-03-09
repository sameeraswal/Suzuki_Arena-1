import { useEffect } from "react";
import { motion } from "framer-motion";
import Backdrop from "./finishbackdrop";
import { stateLogger } from "../../stateLogger.js";
import { Link } from "react-router-dom";
import modalimg from "../Likethumb.webp";
import FinishBackdrop from "./finishbackdrop";

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

const Finishmodal = ({ handleClose, text, type }) => {
  // Log state
  useEffect(() => {
    stateLogger("Modal", true);
    return () => stateLogger("Modal", false);
  }, []);

  return (
    <FinishBackdrop onClick={handleClose}>
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
    </FinishBackdrop>
  );
};

const ModalText = () => (
  <div className="modal-text hand-with-text">
    <img src={modalimg} alt="" height={180} width={180} className="hand"/>
    <h5>Thank you for completing the round</h5>
    <br />
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <Link to="/dashboard">
    {" "}
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

export default Finishmodal;
