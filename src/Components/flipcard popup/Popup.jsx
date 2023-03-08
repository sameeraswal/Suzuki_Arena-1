import React, { useState,useEffect } from "react";
import "./Modal.css";

function Popupexample() {
//   useEffect(() => {
//     setOpenModal(false);
//   }, [openModel]);

  const [openModel, setOpenModal] = useState(true);
  return (
    <>
      {openModel && (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
              <h1>Timeover click continue to move next question</h1>
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
      )}
    </>
  );
}

export default Popupexample;
