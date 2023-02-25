import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./search";

const Login = () => {
  const arena = require("./maruti-suzuki-arena.webp");
  return (
    <>
      <div className="nav-center">
        <Navbar></Navbar>
      </div>

      <div className="container">
        <img src={arena} alt="" className="arena-img" />

        <div className="form-container">
          <h1 className="reg-heading">Login</h1>
          <form>
            <div class="form">
              <input type="text" class="form__input" placeholder=" " />
              <label class="form__label">MSPIN</label>
            </div>
            <div className="form">
              <input type="text" class="form__input" placeholder=" " />
              <label class="form__label">Registration Number</label>
            </div>
            <Link to="/dashboard">
              <button class="control-button up third icon-conatiner">
                Join Now
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
