import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import bgImg1 from '../NewImages/Spin-Wheel_BG.png'
// import { useBetween } from 'use-between';
export const fal = false;

function getValue(){
  return localStorage.getItem('random1')
  
}


const Afterflipcasestudy = ({ title }) => {
  const [data1, setData1] = useState(getValue)
 
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
               Case: {Number(data1)+1}
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
        {/* <div className="right-img">
          <img src={img} alt="img" />
        </div> */}
      </div>
    </>
  );
};

export default Afterflipcasestudy;
