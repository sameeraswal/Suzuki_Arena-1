import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./search";
import loginImg from "./loginicon.png";
import axios from "axios";

const Login = () => {
  const fetchData = () => {
    axios
      .post("http://localhost:4500/api/v1/login", {
        mspin: "123",
        regNumber: "22",
      })
      .then((res) => {
        console.log(res.data);
      });
    return false;
  };

  const arena = require("./maruti-suzuki-arena.webp");
  return (
    <>
      <div className="nav-center">
        <Navbar></Navbar>
      </div>

      <div className="container">
        <img src={arena} alt="" className="arena-img" />

        <div className="form-container">
          <img
            src={loginImg}
            alt="login"
            height={70}
            width={70}
            className="login-admin-img"
          />
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
            {/* <Link to="/dashboard"> */}
            <input
              class="control-button up third icon-conatiner"
              onClick={fetchData}
              type="button"
              value="Join Now"
            />

            {/* </Link> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
