import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import lock from "./Lock.png";

const Dashboard = () => {
  // localStorage.setItem('dataKey', JSON.stringify({key:"test",value:1}));

  let response = {
    status: true,
    data: [
      {
        roundName: "1-A",
        route: "/firstmile",
        isLocked: false,
      },
      {
        roundName: "1-B",
        route: "/chasethemaze",
        isLocked: true,
      },
      {
        roundName: "2",
        route: "/eyeforaneye",
        isLocked: true,
      },
      {
        roundName: "3",
        route: "/bespokesalespitch",
        isLocked: false,
      },
    ],
  };
  let rounds = response.data;

  return (
    <>
      <Navbar />
      {/* <div>
        <h1>Round 1 - Starting Interface</h1>
      </div> */}
      <div className="dashboard-container">
        <div className="round-box-dashboard">Rounds</div>
        <div className="flexbox-container">
          {/* <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <Link to="/firstmile">
              <button className="btn">1-A</button>
            </Link>
          </div> */}

          {rounds.map((item) => (
            <>
              <div className="flexbox-item flexbox-item-1 icon-conatiner">
                <Link to={item.route}>
                  <button className="btn">{item.roundName}</button>
                </Link>
                {item.isLocked && (
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
