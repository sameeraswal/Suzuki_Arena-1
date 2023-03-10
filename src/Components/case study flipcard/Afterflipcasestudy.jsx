import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import bgImg1 from '../NewImages/Spin-Wheel_BG.png'
// import { useBetween } from 'use-between';
export const fal = false;
const Afterflipcasestudy = ({ title }) => {
  // const useShareableState = () => {
  //   const [username, setUsername] = useState(true);
  //   return {
  //     username,
  //     setUsername,
  //   }
  // }
  // const [change]
  // const { username, setUsername} = useBetween(useShareableState);
  const img = require("../wagon_spec.webp");
  const casestudydata = [
    {
      id: 1,
      title: "Case 1",
    },
    {
      id: 2,
      title: "Case 2",
    },
    {
      id: 3,
      title: "Case 3",
    },
    {
      id: 4,
      title: "Case 4",
    },
    {
      id: 5,
      title: "Case 5",
    },
    {
      id: 6,
      title: "Case 6",
    },
    {
      id: 7,
      title: "Case 7",
    },
    {
      id: 8,
      title: "Case 8",
    },
    {
      id: 9,
      title: "Case 9",
    },
    {
      id: 10,
      title: "Case 10",
    },
  ];
  return (
    <>
      <Navbar></Navbar>
      <img src={bgImg1} alt="" className="background-image"/>
      <div className="round-box">Case Study</div>
      <div className="outer-div">
        <div className="actual-card">
          <div className="border-div">
            <div className="text-div">
              <p className="text-margin case-study-text-afterflip">
                {casestudydata[0].title}
              </p>
              <div className="margin-div">
                <Link to="/casestudy">
                  <button
                    className="card-btn-style case-study-read-btn"
                    onClick={() => {}}
                  >
                    Read
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

export default Afterflipcasestudy;
