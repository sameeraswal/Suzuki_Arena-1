import React from "react";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "./index.css"
import FirstMile from "./Components/FirstMile";
import Guildeline from "./Components/Guildeline";
import Randomizer from "./Components/Randomizer";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/firstmile" element={<FirstMile/>}></Route>
          <Route path="/guildeline" element={<Guildeline/>}></Route>
          <Route path="/randomizer" element={<Randomizer/>}></Route>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
