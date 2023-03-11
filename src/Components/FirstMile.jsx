import React, { Children } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// import {modalImg}
// import { AnimatePresence } from "framer-motion";
// import useModal from "./hooks/useModal";
// import { framerLogger } from "./stateLogger";
// import Notification from "./components/Notification";
// import Input from "./components/Input";
import ModalFrammer from "./ModalFrammer";
// import { add } from "./arr-utils";
import "./modalcss.css";
import useModal from "./hooks/useModal";
import { framerLogger } from "../stateLogger";
import modalImg from "../Assets/The-First-Mile.png";

const FirstMile = () => {
  // Modal state
  //
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <img src={modalImg} alt="" className="background-image"/>
      <div className="">
        {/* <div>
          <img src={modalImg} alt="" className="full-bg"/>
        </div> */}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button modal-guide-btn"
          onClick={() => (modalOpen ? close() : open())}
        >
         

        Guidelines
        </motion.button>
      </div>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && (
          <ModalFrammer modalOpen={modalOpen} handleClose={close} />
        )}
      </AnimatePresence>
    </>
  );
};

export default FirstMile;