import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <>
      <div className="nav-center">
        <Navbar></Navbar>
      </div>

      <div className="container">
        <div class="overlay-1" id="overlay-1">
          <div class="sign-in" id="sign-in"></div>
          <div class="sign-up" id="sign-up"></div>
        </div>
        <div class="form">
          <div class="sign-in" id="sign-in-info">
            <h1>Sign In</h1>

            <p class="small">or use your email account:</p>
            <form id="sign-in-form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <p class="forgot-password">Forgot your password?</p>
              <button class="control-button in">Sign In</button>
            </form>
          </div>
          <div class="sign-up" id="sign-up-info">
            <h1>Login</h1>
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
              <div class="form-group" ng-class="{'not-empty': userName.length}">
                <input
                  type="text"
                  class="form-control"
                  name="RegistrationNumber"
                  id="RegistrationNumber"
                  ng-model="RegistrationNumber"
                />
                <label for="RegistrationNumber" class="animated-label">
                  Registration Number
                </label>
              </div>
              <Link to="/dashboard">
                {" "}
                <button class="control-button up third">Join Now</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
