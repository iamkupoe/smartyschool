import React from 'react';
import '../../css/Summary.css';
import { attendanceData, summaryData, enrollmentData } from '../Constants';
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
  const COLOURS = ['#8884d8', '#00C49F'];
  return (
    <div className="flex flex-col  h-[95vh] overflow-y-auto p-[0.8rem] gap-[0.5rem]">
      <div className="flex flex-col  border p-[0.5rem] border-[#c8c8c8]">
        <h2 className='text-[#141414] 2xl:text-[2rem]'>Fees payment</h2>
        <div className="flex flex-col gap-[0.8rem] sm:flex-row sm:flex-wrap">
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
      <div className="flex flex-col md:flex-row gap-[0.5rem]">
        <div className="md:w-[50%] border p-[0.5rem] border-[#c8c8c8]">
          <h2 className='text-[#141414] 2xl:text-[2rem]'>Attendance</h2>
          <div className="">
            {
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={attendanceData}
                  margin={{ top: 0, right: 0, left: 0, buttom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} tickCount={6} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Boys" fill="#1338be" width={10} />
                  <Bar dataKey="Girls" fill="#3cb043" width={10} />
                </BarChart>
              </ResponsiveContainer>
            }
          </div>
        </div>
        <div className="md:w-[50%] border p-[0.5rem] border-[#c8c8c8]">
          <h2 className='text-[#141414] 2xl:text-[2rem]'>Enrollment</h2>
          <div className="">
            {
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={enrollmentData}
                    cx="50%"
                    cy={130}
                    innerRadius={75}
                    outerRadius={100}
                    dataKey="value"
                    label
                  />

                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
