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

const ModalFrammerc = ({ handleClose, text, type }) => {
  // Log state
  useEffect(() => {
    stateLogger("Modal", true);
    return () => stateLogger("Modal", false);
  }, []);

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        className="modal orange-gradient resp-tablet-e-f-e resp-desktop"
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
    <h3>Eye for an Eye- Guidelines</h3>
    <h5>
      <div>
        <div>◉ </div>
        <div>
        &nbsp;Participants would spin the wheel digitally to select the competition
        &nbsp; &nbsp;comparison
        </div>
      </div>
      <div>
        <div>◉</div>
        <div>
        &nbsp;Inverted cards with benefit statements would be shown on the screen
        </div>
      </div>
      <div>
        <div>◉</div>
        <div>
          {" "}
          &nbsp;Participants would choose the correct card with mentioned parameter &nbsp;of
          dominance over the shown competition vehicle out of the cards
          &nbsp;displayed
        </div>
      </div>
      <div>
        <div> ◉</div>
        <div>
        &nbsp;The number of cards would drop after A choice, whether correct or
           &nbsp;incorrect{" "}
        </div>
      </div>
      <div>
        <div> ◉</div>
        <div>
        &nbsp;Out of 8 cards 5 cards would be flipped by the participant, which is
          an  &nbsp;advantage over the competition; the duration of this round will be
          1  &nbsp;minute per question
        </div>
      </div>
      <div>
        <div> ◉</div>
        <div>  &nbsp;Value would be entered as per the card chosen</div>
      </div>
      <div>
        <div>◉ </div>
        <div>  &nbsp;And each question carries 10 marks</div>
      </div>
    </h5>
  </div>
);

const ModalText1 = () => (
  <div className="modal-text">
    <h3>Chase The Maze - Guidelines</h3>
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
  <Link to="/wheel">
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

export default ModalFrammerc;
