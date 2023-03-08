import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import lock from "./Lock.png";
import axios from "axios";
import { APIURL } from "../App";
const Dashboard = () => {
  // localStorage.setItem('dataKey', JSON.stringify({key:"test",value:1}));

  // let response = {
  //   status: true,
  //   data: [
  //     {
  //       roundName: "1-A",
  //       route: "/firstmile",
  //       isLocked: false,
  //     },
  //     {
  //       roundName: "1-B",
  //       route: "/chasethemaze",
  //       isLocked: false,
  //     },
  //     {
  //       roundName: "2",
  //       route: "/eyeforaneye",
  //       isLocked: true,
  //     },
  //     {
  //       roundName: "3",
  //       route: "/bespokesalespitch",
  //       isLocked: true,
  //     },
  //     {
  //       roundName: "4",
  //       route: "/solutionsonly",
  //       isLocked: true,
  //     },
  //     {
  //       roundName: "5",
  //       route: "/askexpress",
  //       isLocked: true,
  //     },
  //     {
  //       roundName: "6",
  //       route: "/listthetwist",
  //       isLocked: true,
  //     },
  //     {
  //       roundName: "7",
  //       route: "/judgesround",
  //       isLocked: true,
  //     },
  //   ],
  // };
  // let rounds = {};
  let [rounds, setRounds] = useState([]);
  // let d;
  useEffect(() => {
    // alert("Page is running");
    axios
      .get(`${APIURL}/api/v1/roundlists`)
      .then((res) => {
        setRounds(res.data.data);
        console.log(res);
      })
      .catch((error) => console.log(error, "error is here"));
  }, []);
          
  return (
    <>
      <Navbar />
     
      <div className="dashboard-container">
        <div className="round-box-dashboard">Rounds</div>
        <div className="flexbox-container">
         

          {rounds.map((item) => (
            <>
              <div className="flexbox-item flexbox-item-1 icon-conatiner">
                <Link to='/question'>
                <button className="btn">{item.roundName}</button>
                </Link>
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
