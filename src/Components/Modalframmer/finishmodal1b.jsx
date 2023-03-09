import { useEffect } from "react";
import { motion } from "framer-motion";
import Backdrop from "./finishbackdrop";
import { stateLogger } from "../../stateLogger.js";
import { Link } from "react-router-dom";
import modalimg from "../Likethumb.webp";
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

const Finishmodal1b = ({ handleClose, text, roundName }) => {
  // Log state
  useEffect(() => {
    stateLogger("Modal", true);
    return () => stateLogger("Modal", false);
  }, []);

  const getData = () => {
    axios
      .post(`${APIURL}/api/v1/finishround`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundName: roundName,
      })
      .then((res) => {
        console.log(JSON.parse(localStorage.getItem("mspin")), "MSPIN");
        console.log(res, "Response of roundlist");
        console.log(roundName, "Response of RoundName");
      })
      .catch((error) => console.log(error.response.data.message));
    // return false;
  };
  return (
    <FinishBackdrop1b onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalText text={text} />

        <ModalButton onClick={handleClose} label="Close" getData={getData} />
      </motion.div>
    </FinishBackdrop1b>
  );
};

const ModalText = () => (
  <div className="modal-text hand-with-text">
    <img src={modalimg} alt="" height={180} width={180} className="hand" />
    <h5>Thank you for completing the round</h5>
    <br />
  </div>
);

const ModalButton = ({ onClick, label,getData }) => (
  <Link to="/login">
    <motion.button
      className="modal-button cls-btn finish-modal-btn"
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        onClick();
        getData();
      }}
    >
      Back to Home
    </motion.button>
  </Link>
);

export default Finishmodal1b;
