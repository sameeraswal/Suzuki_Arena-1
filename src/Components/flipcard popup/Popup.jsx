import React, { useState,useEffect } from "react";
import "./Modal.css";

function Popupexample({}) {
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
              <button style={{position: 'absolute', color: 'red', fontSize: '30px'}}
                onClick={() => {
                  setOpenModal(false);
                }}
              >
               
              </button>
            </div>
            <div className="title">
              <h1>Time's up! Click on continue to move to the next question</h1>
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
      )}
    </>
  );
}

export default Popupexample;
