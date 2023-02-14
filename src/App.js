import React from "react";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "./index.css";
import FirstMile from "./Components/FirstMile";
import Guildeline from "./Components/Guildeline";
import Randomizer from "./Components/Randomizer";
import Dice from "./Components/Dice";
import Wheel from "./Components/Wheel";
// import FlippableCard from "./Components/FlippableCard";
import Cards from "./Components/Cards";

const App = () => {
  const places = [
    "Pizzas",
    "Sandwiches",
    "Salads",
    "Soup",
    "Japanese food",
    "Pastas",
  ];
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/wheel" element={<Wheel items={places} />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/firstmile" element={<FirstMile />}></Route>
          <Route path="/guildeline" element={<Guildeline />}></Route>
          <Route path="/randomizer" element={<Randomizer />}></Route>
          <Route path="/dice" element={<Dice />}></Route>
          <Route path="/flipcard" element={<Cards />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
