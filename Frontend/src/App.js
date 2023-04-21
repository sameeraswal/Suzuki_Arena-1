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
import Chasethemaze from "./Components/Chasethemaze";
import Random from "./Components/Random Number/Randomnumber";
import Timermin from "./Components/Timersection/Timermin";
import Timersection from "./Components/Timersection/Timersection";
import Puzzle from "./Components/Puzzle";
import Puzzlechoice from "./Components/Puzzlepage/Puzzlechoice";
import Eyeforaneye from "./Components/eyeforaneye";
import Bespokesalespitch from "./Components/Bespokesalespitch";
import Leaderboardth from "./Components/leaderboardfinal/leaderboardth";
import Puzzlequestion from "./Components/Puzzle4/Puzzlequestion";
import Askexpress from "./Components/Askexpress";
import Listthetwist from "./Components/Listthetwist";
import Judgesround from "./Components/Judgesround";
import Solutionsonly from "./Components/Solutiononly";
import Cardscasestudy from "./Components/case study flipcard/Cardscasestudy";
import Casestudy from "./Components/Casestudy";
import Afterflipcasestudy from "./Components/case study flipcard/Afterflipcasestudy";
import Brewsuv from "./Components/Flipcardspages/Brevsxuv";
import Altovskwid from "./Components/Flipcardspages/Altovskwid";
import Desirevsamaze from "./Components/Flipcardspages/Desirevsamaze";
import Desirevstiger from "./Components/Flipcardspages/Desirevstiger";
import CelvsTia from "./Components/Flipcardspages/CelvsTia";
import Ertvstrib from "./Components/Flipcardspages/Ertvstrib";
import Desvsaura from "./Components/Flipcardspages/Desvsaura";
import Ertvscare from "./Components/Flipcardspages/Ertvscare";
import Sprevskwid from "./Components/Flipcardspages/Sprevskwid";
import Swifvsi20 from "./Components/Flipcardspages/Swifvsi20";
import Wagovstiago from "./Components/Flipcardspages/Wagovstiago";
import Swiftvsgrandi10 from "./Components/Flipcardspages/Swiftvsgrandi10";
import Finishmodal from "./Components/Modalframmer/finishmodal";
import Enterertiga from "./Components/Entercorepages/Enterertiga";
import Enterbrezza from "./Components/Entercorepages/Enterbrezza";
import Popupquestion from "./Components/flipcard popup/Popupquestion";
import Popupexample from "./Components/flipcard popup/Popup";
import Dezirevsamaze from "./Components/Flipcardspages/Desirevsamaze";
import Dezirevstiger from "./Components/Flipcardspages/Desirevstiger";
import Enterscore7 from "./Components/Enterscore7";
import Enterscore5 from "./Components/Enterscore5";
import Enterscore6 from "./Components/Enterscore6";
import Puzzlecase from "./Components/puzzlecase/Puzzlecase";
import Leaderboardsrm from "./Components/ScoreboardSRM/Leaderboardsrm";
import Leaderboardthsrm from "./Components/Leaderboardthsrm/Leaderboardsrm";
import Puzzlesrm from "./Components/Puzzlequestionsrm/Puzzlesrm";
import Enterscore8 from "./Components/Enterscore8";
import Leaderboardths from "./Components/leaderboardfinal/leaderboardths";
import Roundscore from "./Components/Roundscore";
import Enterscore2 from "./Components/Enterscore2";
import Afterflipwrong from "./Components/Afterflipwrong";

export const APIURL = "http://localhost:4500";
export const QUESTIONIMAGEPATH = "../Assets/Questions/Round1-A/";
export const imgur = "../Assets/Questions/Round2";

const App = () => {
  // API URLs

  const places = [
    {
      id: 0,
      title: "Ertiga Vs Carens",
      class: "wheel-color",
    },
    {
      id: 1,
      title: "Ertiga Vs Triber",
      class: "wheel-color1",
    },
    {
      id: 2,
      title: "Dzire Vs Aura",
      class: "wheel-color2",
    },
    {
      id: 3,
      title: "S presso Vs Kwid",
      class: "wheel-color3",
    },
    {
      id: 4,
      title: "WagonR Vs Tiago",
      class: "wheel-color4",
    },
    {
      id: 5,
      title: "Alto K10 Vs Kwid",
      class: "wheel-color5",
    },
    {
      id: 6,
      title: "Celerio Vs Tiago",
      class: "wheel-color6",
    },
    {
      id: 7,
      title: "Swift Vs Altroz",
      class: "wheel-color",
    },
    {
      id: 8,
      title: "Swift Vs Grand i10 NIOS",
      class: "wheel-color1",
    },
    {
      id: 9,
      title: "Dzire Vs Amaze",
      class: "wheel-color2",
    },
    {
      id: 10,
      title: "Dzire Vs Tigor",
      class: "wheel-color3",
    },
    {
      id: 11,
      title: "Brezza Vs XUV 300",
      class: "wheel-color4",
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
          {/* <Route exact path="/" element={<Registration />}></Route> */}
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/wheel" element={<Wheel items={places} />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/firstmile" element={<FirstMile />}></Route>
          <Route path="/randomizer" element={<Randomizer />}></Route>
          <Route path="/dice" element={<Dice />}></Route>
          <Route
            path="/afterflipwrong"
            element={<Afterflipwrong />}
          ></Route>
          
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
          <Route path="/chasethemaze" element={<Chasethemaze />}></Route>
          <Route path="/randomnum" element={<Random />}></Route>
          <Route path="/timersection" element={<Timersection />}></Route>
          <Route path="/puzzle" element={<Puzzle />}></Route>
          <Route path="/puzzlechoice" element={<Puzzlechoice />}></Route>
          <Route path="/puzzlecase" element={<Puzzlecase />}></Route>

          <Route path="/eyeforaneye" element={<Eyeforaneye />}></Route>
          <Route
            path="/bespokesalespitch"
            element={<Bespokesalespitch />}
          ></Route>
          <Route path="/puzzlequestion" element={<Puzzlequestion />}></Route>
          <Route path="/enterscore5" element=<Enterscore5 />></Route>
          <Route path="/enterscore6" element=<Enterscore6 />></Route>
          <Route path="/enterscore7" element=<Enterscore7 />></Route>
          <Route path="/askexpress" element=<Askexpress />></Route>
          <Route path="/listthetwist" element=<Listthetwist />></Route>
          <Route path="/judgesround" element=<Judgesround />></Route>
          <Route path="/solutionsonly" element=<Solutionsonly />></Route>
         

          <Route path="/casestudy" element={<Casestudy />}></Route>
          <Route path="/finishmodal" element={<Finishmodal />}></Route>
          {/* flipcard routes after wheel */}
          <Route
            path="/afterflipcasestudy"
            element={<Afterflipcasestudy />}
          ></Route>
          <Route path="/brezzavsxuv300" element={<Brewsuv />}></Route>
          <Route path="/altok10vskwid" element={<Altovskwid />}></Route>
          <Route path="/celeriovstiago" element={<CelvsTia />}></Route>
          <Route path="/dzirevsamaze" element={<Dezirevsamaze />}></Route>
          <Route path="/dzirevstigor" element={<Dezirevstiger />}></Route>
          <Route path="/dzirevsaura" element={<Desvsaura />}></Route>
          <Route path="/ertigavscarens" element={<Ertvscare />}></Route>
          <Route path="/ertigavstriber" element={<Ertvstrib />}></Route>
          <Route path="/spressovskwid" element={<Sprevskwid />}></Route>
          <Route
            path="/swiftvsgrandi10nios"
            element={<Swiftvsgrandi10 />}
          ></Route>
          <Route path="/swiftvsaltroz" element={<Swifvsi20 />}></Route>
          <Route path="/wagonrvstiago" element={<Wagovstiago />}></Route>
          <Route path="/enterertiga" element={<Enterertiga />}></Route>
          <Route path="/enterbrezza" element={<Enterbrezza />}></Route>
          <Route path="/popupquestion" element={<Popupquestion />}></Route>
          <Route path="/popupexample" element={<Popupexample />}></Route>

          {/* all leaderboard */}
          <Route path="/scoreboardsrm" element={<Leaderboardsrm />}></Route>
          <Route path="/leaderboardfinalrm" element={<Leaderboardth />}></Route>
          <Route path="/leaderboardfinalsrm" element={<Leaderboardths />}></Route>

          <Route path="/leaderboardthsrm" element={<Leaderboardthsrm />}></Route>
          <Route path="/leaderboard" element={<Leaderboard />}></Route>
          <Route path="/puzzlesrm" element={<Puzzlesrm />}></Route>
          <Route path="/wheelscore" element={<Enterscore8 />}></Route>
          <Route path="/roundscore" element={<Roundscore />}></Route>
          <Route path="/enterscore2" element={<Enterscore2 />}></Route>


          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
