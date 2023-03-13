import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./search";
import loginImg from "./loginicon.png";
import axios from "axios";
import { APIURL } from "../App";

const Login = () => {
  const navigate = useNavigate();
  const [mspin, setMspin] = useState("");
  const [regno, setRegno] = useState("");
  const [res, setRes] = useState(true);

  const [message, setMessage] = useState("");
  const handleChangemspin = (event) => {
    setMspin(event.target.value);
  };
  const handleChangeregno = (event) => {
    setRegno(event.target.value);
  };
  const [status, setStatus] = useState(false);

  const fetchData = () => {
    axios
      .post(`${APIURL}/api/v1/login`, {
        mspin: mspin,
        regNumber: regno,
      })
      .then((res) => {
        console.log(res, "Response");
        setStatus(res.data.status);
        console.log(res.data.status, "");
        localStorage.setItem(
          "categoryTypeofEmployee",
          JSON.stringify(res.data.category)
        );

        // console.log(res)
        if (res.data.status === true) {
          // setRes(res.data.status);
          setMessage(res.data.message);

          console.log(res.data.status, res.data.message);
          // setLoginStatus(true);
          // alert("admin login successfull");
        } else {
          setMessage(res.data.message);
        }
      })
      .catch((error) => setMessage(error.response.data.message));
    // return false;
  };

  const arena = require("./Pratham.png");
  const navigateLogin = () => {
    console.log(status, "stat");
    mspin && regno
      ? setTimeout(() => window.open("./dashboard", "_self"), 2000)
      : setMessage("Please Enter details");
  };
  // const [mspin, setMspin] = useState([]);

  useEffect(() => {
    localStorage.setItem("mspin", JSON.stringify(mspin));
    localStorage.setItem("regNo", JSON.stringify(regno));
    localStorage.removeItem("cod");
  }, [mspin, regno]);
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
              <input
                type="text"
                class="form__input"
                placeholder=" "
                value={mspin}
                onChange={handleChangemspin}
              />
              <label class="form__label">MSPIN</label>
            </div>
            <div className="form">
              <input
                type="text"
                class="form__input"
                placeholder=" "
                value={regno}
                onChange={handleChangeregno}
              />
              <label class="form__label">Registration Number</label>
            </div>
            {/* {res && ( */}
            {/* <Link to="/dashboard"> */}
            <input
              type="text"
              class="form__input invisible"
              placeholder=" "
              value={message}
            />
            <input
              class="control-button up third icon-conatiner btn-bottom"
              onClick={() => {
                fetchData();
                !status && navigateLogin();
              }}
              type="button"
              value="Login"
            />
            {/* </Link> */}
            {/* )} */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
