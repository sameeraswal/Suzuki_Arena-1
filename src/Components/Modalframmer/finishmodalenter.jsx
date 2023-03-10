import { useEffect } from "react";
import { motion } from "framer-motion";
import Backdrop from "./finishbackdrop";
import { stateLogger } from "../../stateLogger.js";
import { Link } from "react-router-dom";
import modalimg from "../../Assets/Completion.png";
import FinishBackdrop from "./finishbackdrop";
import FinishBackdrop1b from "./finishbackdrop1b";
import axios from "axios";
import { APIURL } from "../../App";

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
    <FinishBackdrop1b onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        className=""
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalText text={text} />

        <ModalButton onClick={handleClose} label="Close"/>
      </motion.div>
    </FinishBackdrop1b>
  );
};

const ModalText = () => (
  <div className="modal-text hand-with-text">
    <img src={modalimg} alt="" height={480} width={700} />
  </div>
);

const ModalButton = ({ onClick, label, getData }) => (
  <Link to="/">
    <motion.button
      className="modal-button cls-btn finish-modal-btn"
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        onClick();
      }}
    >
      Back to Home
    </motion.button>
  </Link>
);

export default Finishmodalenter;
