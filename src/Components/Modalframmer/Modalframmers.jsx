import { useEffect } from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";
import { stateLogger } from "../../stateLogger.js";
import { Link } from "react-router-dom";
import guidelines from "../../Assets/Bespoke_Sales-Pitch_Guidelines.png";
import guidelinessrm from "../../Assets/SRM-The-Coach---Guidelines.png";
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
        className=""
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {JSON.parse(localStorage.getItem("categoryTypeofEmployee")) ===
          "Sales Captain" && <ModalText1 text={text} />}
        {JSON.parse(localStorage.getItem("categoryTypeofEmployee")) ===
          "Sales Expert" && <ModalText text={text} />}
        <ModalButton onClick={handleClose} label="Close" />
      </motion.div>
    </Backdrop>
  );
};

const ModalText = () => (
  <div className="guidelines-img">
    {/* <h3>The First Mile- Guidelines</h3>
    <h5>
      <div>
        <div>◉ </div>
        <div>
          &nbsp;First round will be based on images or videos in which 5 questions
          would display as per randomizer. The duration of this round would be 1
          minute per question
        </div>
      </div>
    </h5>
    <br />
    <h5>◉  &nbsp;Each question carries 10 marks</h5> */}
    <img src={guidelines} alt="" />
  </div>
);

const ModalText1 = () => (
  <div className="guidelines-img">
    {/* <h3>The First Mile- Guidelines</h3>
    <h5>
      <div>
        <div>◉ </div>
        <div>
          &nbsp;First round will be based on images or videos in which 5 questions
          would display as per randomizer. The duration of this round would be 1
          minute per question
        </div>
      </div>
    </h5>
    <br />
    <h5>◉  &nbsp;Each question carries 10 marks</h5> */}
    <img src={guidelinessrm} alt="" />
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <Link to="/dice">
    {" "}
    <motion.button
      className="modal-button cls-btn bespoke-btn"
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{top:"81%"}}
    >
      Let's begin
    </motion.button>
  </Link>
);

export default ModalFrammers;
