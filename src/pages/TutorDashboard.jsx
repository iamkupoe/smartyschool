import React, { useState, useEffect } from 'react';
import '../css/Dashboard.css';
import { Outlet } from 'react-router-dom';
import logo from '../assets/images/school_logo.png';
import { RiProfileFill } from 'react-icons/ri';
import { BiBarChart } from "react-icons/bi";
import { BsPersonCheck } from 'react-icons/bs';
import { IoBarChartSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getCurrentUrl, getTutorDashboardUrlNow } from '../components/Utils';

const TutorDashboard = () => {
  const sidebarButtons =
    'group hover:bg-[#141414] px-[0.5rem] py-[0.5rem] sm:px-[0.8rem] sm:py-[0.8rem] md:px-[0.5rem] md:py-[0.5rem] 2xl:px-[1rem] 2xl:py-[1rem]  md:w-[100%] md:flex md-flex-row md:justify-start md:items-center md:gap-[0.5rem] rounded-full md:rounded-none';
  const sidebarBtnText =
    'hidden text-[#141414] font-light group-hover:text-[#f0f0f0] md:block xl:text-[1.2rem] 2xl:text-[2rem]';
  const sidebarBtnIcon =
    'text-[#141414] text-[1.3rem] sm:text-[1.7rem] md:text-[1rem] xl:text-[1.3rem] 2xl:text-[2.4rem] group-hover:text-[#f0f0f0]';

  const [currentUrl, setCurrentUrl] = useState('summary');
  const location = useLocation();

  useEffect(() => {
    setCurrentUrl(getTutorDashboardUrlNow(location.pathname));
  }, [location.pathname]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col border-r border-r-[1px] border-r-[#c8c8c8] w-[15%] h-[100vh]">
        <div className="flex flex-row justify-center items-center border-b border-b-[#d8d8d8] px-[0.2rem] py-[0.5rem] 2xl:px-[0.8rem] 2xl:py-[1rem] h-[12vh]">
          <img
            src={logo}
            alt="School Logo"
            className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] md:w-[2rem] md:h-[2rem] lg:h-[3rem] lg:w-[3rem] xl:h-[3.5rem] xl:w-[3.5rem] 2xl:h-[5rem] 2xl:w-[5rem] "
          />
          <h2 className="w-[70%] hidden text-[#141414] md:block md:font-bold md:text-[0.75rem] lg:text-[1rem] xl:text-[1.3rem] 2xl:text-[1.5rem]">
            Dashen Hills Montessori
          </h2>
        </div>
        <ul className="flex flex-col justify-start items-center gap-[1rem] pt-[1rem]">
          <Link
            to="/tutor-dashboard/account"
            className={`${sidebarButtons} ${
              currentUrl === 'account' ? 'bg-[#141414] text-[#f0f0f0]' : ''
            }`}
          >
            <RiProfileFill
              className={`${sidebarBtnIcon} ${
                currentUrl === 'account' ? 'text-[#f0f0f0]' : ''
              }`}
            />

            <span
              className={`${sidebarBtnText} ${
                currentUrl === 'account' ? 'text-[#f0f0f0]' : ''
              }`}
            >
              Profile
            </span>
          </Link>
          <Link
            to="/tutor-dashboard/attendance"
            className={`${sidebarButtons} ${
              currentUrl === 'attendance' ? 'bg-[#141414]' : ''
            }`}
          >
            <BsPersonCheck
              className={`${sidebarBtnIcon} ${
                currentUrl === 'attendance' ? 'text-[#f0f0f0]' : ''
              }`}
            />
            <span
              className={`${sidebarBtnText} ${
                currentUrl === 'attendance' ? 'text-[#f0f0f0]' : ''
              }`}
            >
              Attendance
            </span>
          </Link>
          <Link
            to="/tutor-dashboard/performance"
            className={`${sidebarButtons} ${
              currentUrl === 'performance' ? 'bg-[#141414]' : ''
            }`}
          >
            <BiBarChart
              className={`${sidebarBtnIcon} ${
                currentUrl === 'performance' ? 'text-[#f0f0f0]' : ''
              }`}
            />
            <span
              className={`${sidebarBtnText} ${
                currentUrl === 'performance' ? 'text-[#f0f0f0]' : ''
              }`}
            >
              Performance
            </span>
          </Link>
        </ul>
      </div>
      <div className="w-[85%]">
        <Outlet />
      </div>
    </div>
  );
};

export default TutorDashboard;
