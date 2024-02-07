import React from 'react';
import '../../css/Summary.css';
import { attendanceData, summaryData } from '../Constants';
import FeesComponent from './FeesComponent';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from 'recharts';

function Summary() {
  const COLORS = ['#0088FE', '#00C49F'];
  return(
    <div className="main-container-summary">
      <div className="fees-container">
        <h2>Fees payment</h2>
        <div className="categories-box">
          {summaryData.map((datum, index) => {
            return (
              <FeesComponent
                icon={datum.icon}
                type={datum.name}
                expected={datum.expected}
                paid={datum.paid}
                balance={datum.balance}
              />
            );
          })}
        </div>
      </div>
      <div className="enrollment-attendance-container">
        <div className="attendance-container">
          <h2>Attendance</h2>
          <div className='attendance-chart-box'>
            {
              <BarChart width={250} height={250} data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="boys" fill="#8884d8" width={10} />
                <Bar dataKey="girls" fill="#82ca9d" width={10} />
              </BarChart>
            }
          </div>
        </div>
        <div className="enrollment-container">
          <h2>Attendance</h2>
          {/* <div>{renderBarChart}</div> */}
        </div>
      </div>
    </div>
  );
}

export default Summary;
