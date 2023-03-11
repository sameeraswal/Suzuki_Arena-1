import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const img = require("./wagon_spec.webp");
  return (
    <>
      <Navbar></Navbar>
      <div className="round-box">Flip a Card</div>
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
                />
                <Link to={params.get("question")}>
                  <button className="card-btn-style" onClick={() => {}}>
                    Submit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right-img">
          <img src={img} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Afterflip;
