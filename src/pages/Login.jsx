import React from 'react';
import SchoolLogo from '../assets/images/school_logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const textInput = 'w-[100%] outline-none p-[0.25rem] ';
  const labelStyle = 'text-[#fff] text-[1rem] lg:text-[1.25rem]';
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-[100vh] bg-[#161010FF]">
      <div
        className="bg-[#ffffff] flex items-center justify-center h-[5rem] md:h-[15.7rem] 
  w-[15rem] lg:w-[20rem] lg:h-[20rem]"
      >
        <img
          src={SchoolLogo}
          alt="Logo"
          className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]  "
        />
      </div>
      <div className="flex flex-col bg-[#013250] w-[15rem] h-auto md:h-[15.7rem] lg:w-[20rem] lg:h-[20rem] ">
        <form className="flex flex-col justify-center items-center gap-[1rem] px-[1.5rem] p-[0.75rem]">
          <label className={labelStyle}>
            Username
            <input type="text" name="username" className={textInput} />
          </label>

          <label className={labelStyle}>
            Password
            <input type="password" name="password" className={textInput} />
          </label>

          <a
            href="#"
            className="text-[0.8rem] lg:text-[1rem] flex-start text-[#fff] self-start"
          >
            forgot password?
          </a>

          <Link
            to="/dashboard"
            type="Login"
            className="w-[100%] py-[0.4rem] bg-[#0073cf] text-[#fff] text-center outline-none mt-[0.5rem] text-[1rem] lg:text-[1.25rem]  rounded-sm"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
