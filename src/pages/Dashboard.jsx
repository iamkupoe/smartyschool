import React, { useState, useEffect } from 'react';
import '../css/Dashboard.css';
import { Outlet } from 'react-router-dom';
import logo from '../assets/images/school_logo.png';
import { RxDashboard } from 'react-icons/rx';
import { RiProfileFill } from 'react-icons/ri';
import { HiUserAdd } from 'react-icons/hi';
import { MdPayment } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getCurrentUrl } from '../components/Utils';

const Dashboard = () => {
  const sidebarButtons =
    'group hover:bg-[#141414] px-[0.5rem] py-[0.5rem] sm:px-[0.8rem] sm:py-[0.8rem] md:px-[0.5rem] md:py-[0.5rem] 2xl:px-[1rem] 2xl:py-[1rem]  md:w-[100%] md:flex md-flex-row md:justify-start md:items-center md:gap-[0.5rem] rounded-full md:rounded-none';
  const sidebarBtnText =
    'hidden text-[#141414] font-light group-hover:text-[#f0f0f0] md:block xl:text-[1.2rem] 2xl:text-[2rem]';
  const sidebarBtnIcon =
    'text-[#141414] text-[1.3rem] sm:text-[1.7rem] md:text-[1rem] xl:text-[1.3rem] 2xl:text-[2.4rem] group-hover:text-[#f0f0f0]';

  const [currentUrl, setCurrentUrl] = useState('summary');
  const location = useLocation();

  useEffect(() => {
    setCurrentUrl(getCurrentUrl(location.pathname));
  }, [location.pathname]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col bg-[#dcdcdc] w-[15%] h-[100vh]">
        <div className="flex flex-row justify-center items-center bg-[#c8c8c8] px-[0.2rem] py-[0.5rem] 2xl:px-[0.8rem] 2xl:py-[1rem]">
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
            to="/dashboard/summary"
            className={`${sidebarButtons} ${
              currentUrl === 'summary' ? 'bg-[#141414]' : ''
            }`}
          >
            <RxDashboard
              className={`${sidebarBtnIcon} ${
                currentUrl === 'summary' ? 'text-[#f0f0f0]' : ''
              }`}
            />
            <span
              className={`${sidebarBtnText} ${
                currentUrl === 'summary' ? 'text-[#f0f0f0]' : ''
              }`}
            >
              Dashboard
            </span>
          </Link>
          <Link
            to="/dashboard/profile"
            className={`${sidebarButtons} ${
              currentUrl === 'profile' ? 'bg-[#141414] text-[#f0f0f0]' : ''
            }`}
          >
            <RiProfileFill
              className={`${sidebarBtnIcon} ${
                currentUrl === 'profile' ? 'text-[#f0f0f0]' : ''
              }`}
            />

            <span
              className={`${sidebarBtnText} ${
                currentUrl === 'profile' ? 'text-[#f0f0f0]' : ''
              }`}
            >
              Profile
            </span>
          </Link>
          <Link
            to="/dashboard/register"
            className={`${sidebarButtons} ${
              currentUrl === 'register' ? 'bg-[#141414]' : ''
            }`}
          >
            <HiUserAdd
              className={`${sidebarBtnIcon} ${
                currentUrl === 'register' ? 'text-[#f0f0f0]' : ''
              }`}
            />
            <span
              className={`${sidebarBtnText} ${
                currentUrl === 'register' ? 'text-[#f0f0f0]' : ''
              }`}
            >
              Register
            </span>
          </Link>
          <Link
            to="/dashboard/fees"
            className={`${sidebarButtons} ${
              currentUrl === 'fees' ? 'bg-[#141414]' : ''
            }`}
          >
            <MdPayment
              className={`${sidebarBtnIcon} ${
                currentUrl === 'fees' ? 'text-[#f0f0f0]' : ''
              }`}
            />
            <span
              className={`${sidebarBtnText} ${
                currentUrl === 'fees' ? 'text-[#f0f0f0]' : ''
              }`}
            >
              Fees
            </span>
          </Link>
          <Link
            to="/dashboard/reports"
            className={`${sidebarButtons} ${
              currentUrl === 'reports' ? 'bg-[#141414] ' : ''
            }`}
          >
            <TbReportAnalytics
              className={`${sidebarBtnIcon} ${
                currentUrl === 'reports' ? ' text-[#f0f0f0]' : ''
              }`}
            />
            <span
              className={`${sidebarBtnText} ${
                currentUrl === 'reports' ? 'text-[#f0f0f0]' : ''
              }`}
            >
              Reports
            </span>
          </Link>
          <Link
            to="/dashboard/settings"
            className={`${sidebarButtons} ${
              currentUrl === 'settings' ? 'bg-[#141414] ' : ''
            }`}
          >
            <FiSettings
              className={`${sidebarBtnIcon} ${
                currentUrl === 'settings' ? 'text-[#f0f0f0]' : ''
              }`}
            />
            <span
              className={`${sidebarBtnText} ${
                currentUrl === 'settings' ? 'text-[#f0f0f0]' : ''
              }`}
            >
              Settings
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

export default Dashboard;
