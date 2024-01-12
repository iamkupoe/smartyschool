import React from 'react';
import '../css/Dashboard.css';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/dashboard/Summary';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="main-container">
      <div className="toolsPanel">
        <Sidebar />
      </div>
      <div className="workspacePanel">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
