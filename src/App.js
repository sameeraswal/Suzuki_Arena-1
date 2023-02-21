import React, { useEffect, useState } from "react";
import Registration from "./Components/Registration";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "./index.css";
import FirstMile from "./Components/FirstMile";
import Guildeline from "./Components/Guideline";
import Randomizer from "./Components/Randomizer";
import Dice from "./Components/Dice";
import Wheel from "./Components/Wheel";
// import FlippableCard from "./Components/FlippableCard";
import Cards from "./Components/Cards";
import Login from "./Components/Login";
import Afterflip from "./Components/Afterflip";
import Leaderboard from "./Components/leaderboard/Leaderboard";

const App = () => {
  const data = [
    { id: 0, cardName: "Height" },
    { id: 1, cardName: "Length" },
    { id: 2, cardName: "Power" },
    { id: 3, cardName: "Torque" },
    { id: 4, cardName: "Bootspace" },
    { id: 5, cardName: "Mileage" },
    { id: 6, cardName: "Width" },
    { id: 7, cardName: "Wheelbase" },
  ];
  const places = ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12"];
  const [showFront, setShowFront] = useState(true);
  useEffect(() => {
    const data = window.localStorage.getItem("cardState");
    if (data !== null) setShowFront(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cardState", JSON.stringify(showFront));
  }, [showFront]);
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/wheel" element={<Wheel items={places} />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/firstmile" element={<FirstMile />}></Route>
          <Route path="/guideline" element={<Guildeline />}></Route>
          <Route path="/randomizer" element={<Randomizer />}></Route>
          <Route path="/dice" element={<Dice />}></Route>
          <Route path="/leaderboard" element={<Leaderboard />}></Route>
          <Route
            path="/afterflip/height"
            element={<Afterflip title={data[0].cardName} />}
          ></Route>
          <Route
            path="/afterflip/length"
            element={<Afterflip title={data[1].cardName} />}
          ></Route>
          <Route
            path="/afterflip/power"
            element={<Afterflip title={data[2].cardName} />}
          ></Route>
          <Route
            path="/afterflip/torque"
            element={<Afterflip title={data[3].cardName} />}
          ></Route>
          <Route
            path="/afterflip/bootspace"
            element={<Afterflip title={data[4].cardName} />}
          ></Route>
          <Route
            path="/afterflip/mileage"
            element={<Afterflip title={data[5].cardName} />}
          ></Route>
          <Route
            path="/afterflip/width"
            element={<Afterflip title={data[6].cardName} />}
          ></Route>
          <Route
            path="/afterflip/wheelbase"
            element={<Afterflip title={data[7].cardName} />}
          ></Route>

          <Route path="/flipcard" element=<Cards />></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
