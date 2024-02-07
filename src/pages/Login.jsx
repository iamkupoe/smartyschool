import React from "react";
import "../css/Login.css";
import SchoolLogo from "../assets/images/school_logo.png";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={SchoolLogo} alt="Logo" className="logo" />
      </div>
      <div className="form-container">
        <form className="login-form">
          <label className="titles">
            Username:
            <input type="text" name="username" className="text-input" />
          </label>

          <label className="titles">
            Password:
            <input type="password" name="password" className="text-input" />
          </label>
          <a href="#" className="forgotPasswordLink">forgot password?</a>

          <Link to="/dashboard" id="sub" type="Login">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
