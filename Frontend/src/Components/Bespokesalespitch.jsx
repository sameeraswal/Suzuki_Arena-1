import React, { Children } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import modalImg from "../Assets/Bespoke---Sales-Pitch.png";
import modalImgSRM from "../Assets/SRM-The Coach.png";
import "./modalcss.css";

import ModalFrammerc from "./Modalframmer/Modalframmerc";
import ModalFrammers from "./Modalframmer/Modalframmers";
const Bespokesalespitch = () => {
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
    <div>
      <Navbar />
      {JSON.parse(localStorage.getItem("categoryTypeofEmployee")) ===
        "Sales Captain" && (
        <img src={modalImgSRM} alt="" className="background-image" />
      )}
      {JSON.parse(localStorage.getItem("categoryTypeofEmployee")) ===
        "Sales Expert" && (
        <img src={modalImg} alt="" className="background-image" />
      )}

      <div className="">
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
          <ModalFrammers modalOpen={modalOpen} handleClose={close} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Bespokesalespitch;
