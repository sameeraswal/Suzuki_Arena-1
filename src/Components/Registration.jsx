import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./search";
import "./registration.scss";
import loginImg from "./loginicon.png";
import axios from "axios";
import { useState } from "react";
import { APIURL } from "../App";
function Registration() {
  const arena = require("./maruti-suzuki-arena.webp");

  const handleEntailmentRequest = (e) => {
    e.preventDefault();
  };
  const [name, setName] = useState("");
  const [dealership, setDearlership] = useState("");
  const [mspin, setMspin] = useState("");
  const [regno, setRegno] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeregno = (event) => {
    console.log(event.target.value)
    setRegno(event.target.value);
  };
  const [update, setUpdate] = useState("");
  const handleChange = (event) => {
    setUpdate(event.target.value);
  };

  const getData = () => {
    axios
      .get(`${APIURL}/api/v1/mspin/${update}`)

      .then((res) => {
        setName(res.data.data.name);
        setDearlership(res.data.data.dealership);
      })
      .catch((error) => console.log(error, "error is here"));
  };
  const postData = () => {
    console.log(mspin,name,dealership,regno)
    axios
      .post(`${APIURL}/api/v1/employee/register`, {
        mspin: update,
        name: name,
        dealership: dealership,
        registrationNumber: regno,
      })
    
      .then((res) => {
        
        console.log(res.data.message, "Message is hewre");
        alert(res.data.message);
      })
      .catch((error) => console.log(error, "error is here"));
  };
  return (
    <div>
      <div className="nav-center">
        <Navbar />
      </div>

      <div className="container">
        <img src={arena} alt="arena" className="arena-img" />

        <div className="form-container">
          <img
            src={loginImg}
            alt="login"
            height={60}
            width={60}
            className="reg-admin-img"
          />
          <h1 className="reg-heading">Registration</h1>
          <form>
            <button
              className="search-icon"
              onClick={(e) => {
                handleEntailmentRequest(e);
                getData();
              }}
            >
              <Search />
            </button>
            <div class="form">
              <input
                type="text"
                class="form__input"
                placeholder=" "
                onChange={handleChange}
                value={update}
              />
              <label class="form__label">MSPIN</label>
            </div>
            <div class="form">
              <input
                type="text"
                class="form__input"
                value={name}
                placeholder=" "
              />
              <label class="form__label">Name</label>
            </div>
            <div class="form">
              <input
                type="text"
                class="form__input"
                placeholder=" "
                value={dealership}
              />
              <label class="form__label">Dealership</label>
            </div>
            <div class="form">
              <input
                type="text"
                class="form__input"
                placeholder=" "
                onChange={handleChangeregno}
              />
              <label class="form__label">Registration Number</label>
            </div>

            <div class="submit">
              {/* <Link to="/login"> */}
              <button
                className="control-button up third icon-conatiner"
                onClick={(e) => {
                  handleEntailmentRequest(e);
                  postData();
                }}
              >
                Register
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
