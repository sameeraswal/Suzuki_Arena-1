import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Registration() {
  const search = require("./search.png");
  return (
    <div>
      <div className="nav-center">
        <Navbar />
      </div>
      
      <div className="container">
        <div class="overlay-1" id="overlay-1">
          <div class="sign-in" id="sign-in"></div>
          <div class="sign-up" id="sign-up"></div>
        </div>
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
              <img src={search} alt="search" height={20} width={20} />
            </button>
            <form action="#" class="custom-form">
              <div class="form-group" ng-class="{'not-empty': userName.length}">
                <input
                  type="text"
                  class="form-control"
                  name="MSPIN"
                  id="MSPIN"
                  ng-model="MSPIN"
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
