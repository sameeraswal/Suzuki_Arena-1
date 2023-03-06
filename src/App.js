import React, { useEffect, useState } from "react";
import Registration from "./Components/Registration";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "./index.css";
import FirstMile from "./Components/FirstMile";
import Randomizer from "./Components/Randomizer";
import Dice from "./Components/Dice";
import Wheel from "./Components/Wheel";
// import FlippableCard from "./Components/FlippableCard";
import Cards from "./Components/Cards";
import Login from "./Components/Login";
import Afterflip from "./Components/Afterflip";
import Leaderboard from "./Components/leaderboard/Leaderboard";
import Question from "./Components/Question";
import Finishround from "./Components/Finish Round/Finishround";
import Chasethemaze from "./Components/Chasethemaze";
import Random from "./Components/Random Number/Randomnumber";
import Timermin from "./Components/Timersection/Timermin";
import Timersection from "./Components/Timersection/Timersection";
import Puzzle from "./Components/Puzzle";
import Puzzlechoice from "./Components/Puzzlepage/Puzzlechoice";
import Finishround1B from "./Components/Finish Round/Finishround1B";
import Eyeforaneye from "./Components/eyeforaneye";
import Bespokesalespitch from "./Components/Bespokesalespitch";
import Leaderboardth from "./Components/leaderboardfinal/leaderboardth";
import Puzzlequestion from "./Components/Puzzle4/Puzzlequestion";
import Enterscore from "./Components/Enterscore";
import Askexpress from "./Components/Askexpress";
import Listthetwist from "./Components/Listthetwist";
import Judgesround from "./Components/Judgesround";
import Solutionsonly from "./Components/Solutiononly";
import Cardscasestudy from "./Components/case study flipcard/Cardscasestudy";
import Casestudy from "./Components/Casestudy";
import Afterflipcasestudy from "./Components/case study flipcard/Afterflipcasestudy";
import Brewsuv from "./Components/Flipcardspages/Brevsxuv";

const App = () => {
  const places = [
    {
      id: 0,
      title: "S presso Vs Kwid",
      class: "wheel-color"
    },
    {
      id: 1,
      title: "WagonR Vs Tiago",
      class: "wheel-color1",
    },
    {
      id: 2,
      title: "Alto K10 Vs Kwid RXT",
      class: "wheel-color2",
    },
    {
      id: 3,
      title: "Celerio Vs Tiago",
      class: "wheel-color3"
    },
    {
      id: 4,
      title: "Swift Vs i20",
      class: "wheel-color4"
    },
    {
      id: 5,
      title: "Swift Vs Grand i10",
      class: "wheel-color5"
    },
    {
      id: 6,
      title: "Desire Vs Amaze",
      class: "wheel-color6"
    },
    {
      id: 7,
      title: "Desire Vs Tiger",
      class: "wheel-color"
    },
    {
      id: 8,
      title: "Brezza ZXI+MT Vs XUV",
      class: "wheel-color1"
    },
    {
      id: 9,
      title: "Ertiga Vs Carens",
      class: "wheel-color2"
    },
    {
      id: 10,
      title: "Ertiga Vs Triber",
      class: "wheel-color3"
    },
    {
      id: 11,
      title: "Desire Vs Aura SX+",
      class: "wheel-color4"
    },
  ];

  const data = [
    { id: 0, cardName: "Height" },
    { id: 1, cardName: "Length" },
    { id: 2, cardName: "Power" },
    { id: 3, cardName: "Torque" },
    { id: 4, cardName: "Bootspace" },
    { id: 5, cardName: "Mileage" },
    { id: 6, cardName: "Width" },
    { id: 7, cardName: "Wheelbase" },
    { id: 8, cardName: "BC" },
    { id: 9, cardName: "FTC" },
  ];

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
          <Route path="/flipcardcasestudy" element=<Cardscasestudy />></Route>

          <Route path="/question" element=<Question />></Route>
          <Route path="/finish" element=<Finishround />></Route>
          <Route path="/finish1b" element=<Finishround1B />></Route>
          <Route path="/chasethemaze" element={<Chasethemaze />}></Route>
          <Route path="/randomnum" element={<Random />}></Route>
          <Route path="/timersection" element={<Timersection />}></Route>
          <Route path="/puzzle" element={<Puzzle />}></Route>
          <Route path="/puzzlechoice" element={<Puzzlechoice />}></Route>
          <Route path="/eyeforaneye" element={<Eyeforaneye />}></Route>
          <Route
            path="/bespokesalespitch"
            element={<Bespokesalespitch />}
          ></Route>
          <Route path="/puzzlequestion" element={<Puzzlequestion />}></Route>
          <Route path="/enterscore" element=<Enterscore />></Route>
          <Route path="/askexpress" element=<Askexpress />></Route>
          <Route path="/listthetwist" element=<Listthetwist />></Route>
          <Route path="/judgesround" element=<Judgesround />></Route>
          <Route path="/solutionsonly" element=<Solutionsonly />></Route>

          <Route path="/leaderboardth" element={<Leaderboardth />}></Route>
          <Route path="/casestudy" element={<Casestudy />}></Route>
          <Route path="/afterflipcasestudy" element={<Afterflipcasestudy />}></Route>

          
          <Route path="/brewsuv" element={<Brewsuv />}></Route>
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
