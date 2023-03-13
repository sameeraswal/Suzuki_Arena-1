import { useEffect } from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";
import { stateLogger } from "../../stateLogger.js";
import { Link } from "react-router-dom";
import guidelines from '../../Assets/List-the-Twist---Guidelines.png'
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
        className=""
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
)

const ModalButton = ({ onClick, label }) => (
  <Link to="/enterscore6">
    {" "}
    <motion.button
      className="modal-button cls-btn"
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

export default Modalframmerl;
