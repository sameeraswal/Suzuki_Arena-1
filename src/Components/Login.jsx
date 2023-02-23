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

          <div class="form">
            <input
              type="text"
              id="MSPIN"
              class="form__input"
              autocomplete="off"
              placeholder=" "
            />
            <label for="MSPIN" class="form__label">
              MSPIN
            </label>
          </div>

          <div class="form">
            <input
              type="text"
              id="name"
              class="form__input"
              autocomplete="off"
              placeholder=" "
            />
            <label for="name" class="form__label">
              Registration Number
            </label>
          </div>

          <Link to="/dashboard">
            <button class="control-button up third icon-conatiner">
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
