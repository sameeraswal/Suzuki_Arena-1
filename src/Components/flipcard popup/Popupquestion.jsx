import React, { useState } from "react";
import "./Modal.css";

function Popupquestion({ setOpenModal }) {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
           
          </button>
        </div>
        <div className="title">
          <h1 style={{color: 'blue'}}>Oops! You choose a wrong card!</h1>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
            className="icon-conatiner"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popupquestion;
