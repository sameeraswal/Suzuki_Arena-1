import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./search";

function Registration() {
  // const search = require("./search.svg");
  const arena = require("./maruti-suzuki-arena.webp");
  return (
    <div>
      <div className="nav-center">
        <Navbar />
      </div>

      <div className="container">
        <img src={arena} alt="arena" className="arena-img" />
        <div class="form">
          <div class="sign-in" id="sign-in-info">
            <h1>Registration</h1>
            <form id="sign-in-form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <p class="forgot-password">Forgot your password?</p>
              <button class="control-button in">Sign In</button>
            </form>
          </div>
          <div className="sign-up" id="sign-up-info">
            <h1>Registration</h1>
            <button className="search-icon">
              <Search />
            </button>
            <form action="#" class="custom-form">
              <div class="form-group" ng-class="{'not-empty': userName.length}">
                <input
                  type="text"
                  class="form-control"
                  name="MSPIN"
                  id="MSPIN"
                  ng-model="MSPIN"
                  autoFocus
                />

                <label for="MSPIN" class="animated-label">
                  MSPIN
                </label>
              </div>

              <div class="form-group" ng-class="{'not-empty': passWord.length}">
                <input
                  type="text"
                  class="form-control"
                  name="Name"
                  id="Name"
                  ng-model="Name"
                />
                <label for="Name" class="animated-label">
                  Name
                </label>
              </div>
              <div class="form-group" ng-class="{'not-empty': userName.length}">
                <input
                  type="text"
                  class="form-control"
                  name="Dealership"
                  id="Dealership"
                  ng-model="Dealership"
                />
                <label for="Dealership" class="animated-label">
                  Dealership
                </label>
              </div>
              <div class="form-group" ng-class="{'not-empty': userName.length}">
                <input
                  type="text"
                  class="form-control"
                  name="Registration Number"
                  id="Registration Number"
                  ng-model="Registration Number"
                />
                <label for="Registration Number" class="animated-label">
                  Registration Number
                </label>
              </div>
              <div class="submit">
                <Link to="/login">
                  {" "}
                  <button className="control-button up third">Register</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
