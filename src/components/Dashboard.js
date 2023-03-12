import React from "react";
import "../css/Dashboard.css";
import logo from "../assets/images/Campion-College-School-Logo-Design-1024x791.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="School Logo" className="logo" />
          <h6 id="sch-name">My School International</h6>
        </div>
        <ul className="itemContainer">
          <li id="items">Dashboard</li>
          <li id="items">Profile</li>
          <li id="items">Register</li>
          <li id="items">Fees</li>
          <li id="items">Reports</li>
          <li id="items">Settings</li>
        </ul>
      </div>
      <div className="main-body">
        <h1>one</h1>
      </div>
    </div>
  );
};

export default Sidebar;
