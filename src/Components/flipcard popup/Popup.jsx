import React, { useState, useEffect } from "react";
import "./Modal.css";

function Popupexample({ setOpenModal }) {
  //   useEffect(() => {
  //     setOpenModal(false);
  //   }, [openModel]);

  return (
    <>
      <div className="modalBackground" style={{ zIndex: "1", marginLeft:"-10%" }}>
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              style={{ position: "absolute", color: "red", fontSize: "30px" }}
              onClick={() => {
                setOpenModal(false);
              }}
            >
              &#10006;
            </button>
          </div>
          <div className="title">
            <h1>Timeover click continue button to move to the next question</h1>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
              className="third icon-conatiner"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popupexample;
