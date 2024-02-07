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
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebarContainer">
        <div className="logo-container">
          <img src={logo} alt="School Logo" className="school-logo" />
          <h2 id="sch-name">My School International</h2>
        </div>
        <ul className="itemContainer">
          <Link to="/dashboard/summary" className="sidebarButtons">
            <RxDashboard id="dashb-icon" />
            <span id="items">Dashboard</span>
          </Link>
          <Link className="sidebarButtons">
            <RiProfileFill id="dashb-icon" />

            <span id="items">Profile</span>
          </Link>
          <Link to="/dashboard/register" className="sidebarButtons">
            <HiUserAdd id="dashb-icon" />
            <span id="items">Register</span>
          </Link>
          <Link to="/dashboard/fees" className="sidebarButtons">
            <MdPayment id="dashb-icon" />
            <span id="items">Fees</span>
          </Link>
          <Link to="/dashboard/reports" className="sidebarButtons">
            <TbReportAnalytics id="dashb-icon" />
            <span id="items">Reports</span>
          </Link>
          <Link to="/dashboard/settings" className="sidebarButtons">
            <FiSettings id="dashb-icon" />
            <span id="items">Settings</span>
          </Link>
        </ul>
      </div>
      <div className="workspacePanel">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
