import React, { Children } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import modalImg from '../Components/ModalImages/Solutions-Only (1).png'
import "./modalcss.css";
import Modalframmerso from "./Modalframmer/Modalframmerso";
const Solutionsonly = () => {
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
      <div className="">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button modal-container"
          onClick={() => (modalOpen ? close() : open())}
        >
          <img
            src={modalImg}
            alt=""
            height={550}
            width={1090}
            style={{
              marginTop: "10px",
              position: "absolute",
              marginLeft: "-10px",
              borderRadius: "16px",
            }}
          />
          <h2>Solutions Only</h2>
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
          <Modalframmerso modalOpen={modalOpen} handleClose={close} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Solutionsonly;
