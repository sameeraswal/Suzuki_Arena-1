import axios from "axios";
import React, { useState } from "react";
import { APIURL } from "../../App";
import "./Modal.css";
import { useCookies } from "react-cookie";


function Popupquestion({ setOpenModal }) {
  const [cookies, setCookie] = useCookies();

  const postData = () => {
    // console.log(mspin, name, dealership, regno);
    axios
      .post(`${APIURL}/api/v1/round/submitcardanswer`, {
        mspin: cookies.mspinnew,
        roundOrder: cookies.roundName,
        questionId: "7",
        cId: "WrongChoice",
      })

      .then((res) => {
        // setMessage(res.data.message);

        console.log(res, "Popup is hewre");
        console.log(JSON.parse(localStorage.getItem("qid")), "questionID");

        // alert(res.data.message);
      })
      .catch((error) => console.log(error, "error is here"));
  };

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer" style={{ marginLeft: "5%" }}>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          ></button>
        </div>
        <div className="title">
          <h1 style={{ color: "blue" }}>Oops! You chose a wrong card!</h1>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
              postData();
              refreshPage();
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
