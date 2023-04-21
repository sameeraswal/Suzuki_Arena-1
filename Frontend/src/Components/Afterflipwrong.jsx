import React from "react";
import { APIURL } from "../App";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

const Afterflipwrong = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const timeout = () => {
    // 👇️ redirects to an external URL
    setTimeout(
      () =>
        window.open(
          `/${params.get("link")}?ms=${params.get("ms")}`,
          "_self"
        ),
      400
    );
  };
  const [cookies, setCookie] = useCookies();

  const postData = () => {
    // console.log(mspin, name, dealership, regno);
    axios
      .post(`${APIURL}/api/v1/round/submitcardanswer`, {
        mspin: cookies.mspinnew,
        roundOrder: cookies.roundName,
        questionId: params.get("Id"),
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
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:'100px'
        }}
      >
          Oops You choose Wrong Card

      </div>
      <button
        className="card-btn-style"
        onClick={() => {
          postData();
          timeout();
        }}
        style={{
          marginLeft: "30%",
          marginTop: "20%",
          fontSize: "50px",
          width: "40%",
          height:'40%'
        }}
      >
      Click here to choose another card
      </button>
    </div>
  );
};

export default Afterflipwrong;
