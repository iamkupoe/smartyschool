import React from 'react';
import '../css/Sidebar.css';
import logo from '../assets/images/school_logo.png';
import { RxDashboard } from 'react-icons/rx';
import { RiProfileFill } from 'react-icons/ri';
import { HiUserAdd } from 'react-icons/hi';
import { MdPayment } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';
import {Link} from 'react-router-dom'


const Sidebar = () => {
  return (
   
      <div className="sidebarContainer">
        <div className="logo-container">
          <img src={logo} alt="School Logo" className="school-logo" />
          <h2 id="sch-name">My School International</h2>
        </div>
        <ul className="itemContainer">
          <Link to="/dashboard/summary" className="item1">
            <RxDashboard id="dashb-icon" />
            <span id="items">Dashboard</span>
          </Link>
          <Link  className="item1">
            <RiProfileFill id="dashb-icon" />

            <span id="items">Profile</span>
          </Link>
          <Link to="/dashboard/register" className="item1">
            <HiUserAdd id="dashb-icon" />
            <span id="items">Register</span>
          </Link>
          <Link to="/dashboard/fees" className="item1">
            <MdPayment id="dashb-icon" />
            <span id="items">Fees</span>
          </Link>
          <Link to="/dashboard/reports" className="item1">
            <TbReportAnalytics id="dashb-icon" />
            <span id="items">Reports</span>
          </Link>
          <Link to="/dashboard/settings" className="item1">
            <FiSettings id="dashb-icon" />
            <span id="items">Settings</span>
          </Link>
        </ul>
      </div>
   
  );
};

export default Sidebar;
