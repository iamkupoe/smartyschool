import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaListCheck } from 'react-icons/fa6';
import { ImUserCheck } from 'react-icons/im';
import { getAttendanceCurrentUrl } from '../../Utils';

const Attendance = () => {
  const menuBtnIconStyle = 'text-[1.8rem] text-[#c8c8c8]';
  const menuBtnTextStyle = 'hidden md:text-[0.8rem]';
  const menuButtonsStyle = 'border border-[#c8c8c8] px-[0.2rem] py-[0.2rem]';

  const [currentUrl, setCurrentUrl] = useState('attendance');
  const location = useLocation();

  useEffect(() => {
    setCurrentUrl(getAttendanceCurrentUrl(location.pathname));
  }, [location.pathname]);

  return (
    <main>
      <section className="h-[12vh] border-b border-b-[#c8c8c8] py-[0.5rem] px-[0.5rem] flex flex-row gap-[0.3rem] justify-start items-center">
        <Link
          to="/tutor-dashboard/attendance/attendance-list"
          className={`${menuButtonsStyle} ${
            currentUrl === 'attendance-list' ? 'bg-[#000]' : ''
          }`}
        >
          <FaListCheck className={`${menuBtnIconStyle}`} />
          <span className={`${menuBtnTextStyle}`}>attendance list</span>
        </Link>
        <Link
          to="/tutor-dashboard/attendance/mark-attendance"
          className={`${menuButtonsStyle} ${
            currentUrl === 'mark-attendance' ? 'bg-[#000]' : ''
          }`}
        >
          <ImUserCheck className={`${menuBtnIconStyle}`} />
          <span className={`${menuBtnTextStyle}`}>attendance list</span>
        </Link>
      </section>

      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Attendance;
