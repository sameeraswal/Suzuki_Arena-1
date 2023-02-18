
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Registration() {
  return (
    <div>
      <Navbar />

      <div className="container">
      <div class="overlay-1" id="overlay-1">
        <div class="sign-in" id="sign-in">
          {/* <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button class="switch-button" id="slide-right-button">
            Sign In
          </button> */}
        </div>
        <div class="sign-up" id="sign-up">
          {/* <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start a journey with us</p>
          <button class="switch-button" id="slide-left-button">
            Sign Up
          </button> */}
        </div>
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
        <div class="sign-up" id="sign-up-info">
          <h1>Registration</h1>
          <form id="sign-up-form">
            <input type="text" placeholder="MSPIN" />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Dealership" />
            <input type="text" placeholder="Registration Number" />
           <Link to='/login' > <button class="control-button up">Register</button></Link>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Registration;
