import React from 'react';
import '../css/Sidebar.css';
import logo from '../assets/images/school_logo.png';
import { RxDashboard } from 'react-icons/rx';
import { RiProfileFill } from 'react-icons/ri';
import { HiUserAdd } from 'react-icons/hi';
import { MdPayment } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
   
      <div className="sidebarContainer">
        <div className="logo-container">
          <img src={logo} alt="School Logo" className="logo" />
          <h2 id="sch-name">My School International</h2>
        </div>
        <ul className="itemContainer">
          <a className="item1">
            <RxDashboard id="dashb-icon" />
            <span id="items">Dashboard</span>
          </a>
          <a className="item1">
            <RiProfileFill id="dashb-icon" />

            <span id="items">Profile</span>
          </a>
          <di className="item1">
            <HiUserAdd id="dashb-icon" />
            <span id="items">Register</span>
          </di>
          <a className="item1">
            <MdPayment id="dashb-icon" />
            <span id="items">Fees</span>
          </a>
          <a className="item1">
            <TbReportAnalytics id="dashb-icon" />
            <span id="items">Reports</span>
          </a>
          <a className="item1">
            <FiSettings id="dashb-icon" />
            <span id="items">Settings</span>
          </a>
        </ul>
      </div>
   
  );
};

export default Sidebar;
