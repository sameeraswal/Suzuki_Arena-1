import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import lock from "./Lock.png";
import axios from "axios";
import { APIURL } from "../App";
const Dashboard = () => {
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
                {!item.isRoundLocked ? (
                  <Link to="/question">
                    <button className="btn">{item.roundName}</button>
                  </Link>
                ) : (
                  <button className="btn btn-grey-out">{item.roundName}</button>
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
