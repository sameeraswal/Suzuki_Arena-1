import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { APIURL, imgur } from "../App";
import { useCookies } from "react-cookie";

import axios from "axios";
// import { useBetween } from 'use-between';
export const fal = false;
const Afterflip = ({ title }) => {
  // const useShareableState = () => {
  //   const [username, setUsername] = useState(true);
  //   return {
  //     username,
  //     setUsername,
  //   }
  // }
  // const [change]
  // const { username, setUsername} = useBetween(useShareableState);
  // const url=window.location.href;
  // const params = new URLSearchParams(window.location.pathname);
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [score, setScore] = useState("");

  const handleChangescore = (event) => {
    console.log(event.target.value);
    setScore(event.target.value);
  };

  const [cookies, setCookie] = useCookies();
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
  const postData = () => {
    // console.log(mspin, name, dealership, regno);
    axios
      .post(`${APIURL}/api/v1/round/submitcardanswer`, {
        mspin: cookies.mspinnew,
        roundOrder: cookies.roundName,
        questionId: params.get("Id"),
        cId: score,
      })

      .then((res) => {
        // setMessage(res.data.message);

        console.log(res.data, "Message is hewre");
        // alert(res.data.message);
      })
      .catch((error) => console.log(error, "error is here"));
  };

  const img = require("./wagon_spec.webp");
  return (
    <>
      <Navbar></Navbar>
      <div className="round-box">Fill the Answer</div>
      <div className="outer-div">
        <div className="actual-card">
          <div className="border-div">
            <div className="text-div">
              <p className="text-margin">{params.get("question")}</p>
              <div className="margin-div">
                <input
                  type="text"
                  className="width-input"
                  placeholder="Enter Answer"
                  required
                  onChange={handleChangescore}
                />
                {/* <Link to={params.get("link")}> */}
                <button
                  className="card-btn-style"
                  onClick={() => {
                    postData();
                    timeout();
                  }}
                >
                  Submit
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="right-img">
          <img
            src={require(`../../public/Assets/Questions/Round2/${params.get(
              "link"
            )}.png`)}
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default Afterflip;
