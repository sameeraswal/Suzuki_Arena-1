import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import lock from "../Assets/03.png";
import axios from "axios";
import { APIURL } from "../App";
import bgImg from '../Assets/Dice_BG.png'


const Dashboard = () => {
  let [rounds, setRounds] = useState([]);
  // let d;
  useEffect(() => {
    // alert("Page is running");
    axios
      .post(`${APIURL}/api/v1/roundlists`,{
        mspin: JSON.parse(localStorage.getItem("mspin"))
      })
      .then((res) => {
        setRounds(res.data.data);
      })
      .catch((error) => console.log(error, "error is here"));
  }, []);

  return (
    <>
      <Navbar />
      <img src={bgImg} alt="" className="background-image"/>
      <div className="">
        <div className="round-box">Rounds</div>
        <div className="flexbox-container">
          {rounds.map((item) => (
            <>
              {/* {console.log(item.route)} */}
              <div className="flexbox-item flexbox-item-1 icon-conatiner">
                {item.isRoundLocked ? (
                  <Link to={item.route}>
                    <button className="btn btn-grey-out">{item.roundName}</button>
                  </Link>
                ) : (
                  <Link to={item.route}>
                  
                    <button className="btn">
                      {item.roundName}
                    </button>
              
                  </Link>
                )}

                {item.isRoundLocked && (
                  <img
                    src={lock}
                    alt="lock"
                    height={20}
                    width={20}
                    className="lock-div"
                  />
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
