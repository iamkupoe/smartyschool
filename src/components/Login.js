import React from 'react';
import '../css/Login.css';
import SchoolLogo from "../assets/images/Campion-College-School-Logo-Design-1024x791.jpeg";

function Login() {
  return (
    <div className="login-container">
    <div className='image-container'>
      <img src= {SchoolLogo} alt="Logo" className="logo" />
      </div>
      <div className='form-container'>
      <form className="login-form">
        <label id='titles'>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label id='titles'>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button id='sub' type="Login">Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
