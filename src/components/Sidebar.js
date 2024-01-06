import React from "react";
import "../css/Sidebar.css";
import logo from "../assets/images/Campion-College-School-Logo-Design-1024x791.jpeg";
import { RxDashboard } from "react-icons/rx";
import { RiProfileFill } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="School Logo" className="logo" />
          <h6 id="sch-name">My School International</h6>
        </div>
        <ul className="itemContainer">
          <div className="item1">
            <RxDashboard id="dashb-icon" />
            <li id="items">Dashboard</li>
          </div>
          <div className="item1">
            <RiProfileFill id="dashb-icon" />

            <li id="items">Profile</li>
          </div>
          <di className="item1">
            <HiUserAdd id="dashb-icon" />
            <li id="items">Register</li>
          </di>
          <div className="item1">
            <MdPayment id="dashb-icon" />
            <li id="items">Fees</li>
          </div>
          <div className="item1">
            <TbReportAnalytics id="dashb-icon" />
            <li id="items">Reports</li>
          </div>
          <div className="item1">
            <FiSettings id="dashb-icon" />
            <li id="items">Settings</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
