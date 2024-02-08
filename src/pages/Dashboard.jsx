import React from 'react';
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

const Dashboard = () => {
  const sidebarButtons =
    'group hover:bg-[#141414] px-[0.5rem] py-[0.5rem] sm:px-[0.8rem] sm:py-[0.8rem] md:px-[0.5rem] md:py-[0.5rem] md:w-[100%] md:flex md-flex-row md:justify-start md:items-center md:gap-[0.5rem] rounded-full md:rounded-none';
  const sidebarBtnText =
    'hidden text-[#141414] font-light group-hover:text-[#f0f0f0] md:block';
  const sidebarBtnIcon =
    'text-[#141414] text-[1.3rem] sm:text-[1.7rem] md:text-[1.3rem] group-hover:text-[#f0f0f0]';
  return (
    <div className="flex flex-row">
      <div className="flex flex-col bg-[#dcdcdc] w-[20%] h-[100vh]">
        <div className="flex flex-row justify-center items-center bg-[#c8c8c8] px-[0.2rem] py-[0.5rem]">
          <img
            src={logo}
            alt="School Logo"
            className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] md:w-[3rem] md:h-[3rem]"
          />
          <h2 className="w-[70%] hidden text-[#141414] md:block md:font-bold">Dashen Hills Montissori</h2>
        </div>
        <ul className="flex flex-col justify-start items-center gap-[1rem] pt-[1rem]">
          <Link to="/dashboard/summary" className={sidebarButtons}>
            <RxDashboard className={sidebarBtnIcon} />
            <span className={sidebarBtnText}>Dashboard</span>
          </Link>
          <Link className={sidebarButtons}>
            <RiProfileFill className={sidebarBtnIcon} />

            <span className={sidebarBtnText}>Profile</span>
          </Link>
          <Link to="/dashboard/register" className={sidebarButtons}>
            <HiUserAdd className={sidebarBtnIcon} />
            <span className={sidebarBtnText}>Register</span>
          </Link>
          <Link to="/dashboard/fees" className={sidebarButtons}>
            <MdPayment className={sidebarBtnIcon} />
            <span className={sidebarBtnText}>Fees</span>
          </Link>
          <Link to="/dashboard/reports" className={sidebarButtons}>
            <TbReportAnalytics className={sidebarBtnIcon} />
            <span className={sidebarBtnText}>Reports</span>
          </Link>
          <Link to="/dashboard/settings" className={sidebarButtons}>
            <FiSettings className={sidebarBtnIcon} />
            <span className={sidebarBtnText}>Settings</span>
          </Link>
        </ul>
      </div>
      <div className="w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
