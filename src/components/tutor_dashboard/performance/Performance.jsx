import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import { ImUserCheck } from 'react-icons/im';
import { MdOutlineChecklist } from 'react-icons/md';
import { getPerformanceCurrentUrl } from '../../Utils';

const Performance = () => {
  const menuBtnIconStyle = 'text-[1.8rem] text-[#c8c8c8]';
  const menuBtnTextStyle = 'hidden md:text-[0.8rem]';
  const menuButtonsStyle = 'border border-[#c8c8c8] px-[0.2rem] py-[0.2rem]';

  const [currentUrl, setCurrentUrl] = useState('performance');
  const location = useLocation();

  useEffect(() => {
    setCurrentUrl(getPerformanceCurrentUrl(location.pathname));
  }, [location.pathname]);

  return (
    <main>
      <section className="h-[12vh] border-b border-b-[#c8c8c8] py-[0.5rem] px-[0.5rem] flex flex-row gap-[0.3rem] justify-start items-center">
        <Link
          to="/tutor-dashboard/performance/performance-list"
          className={`${menuButtonsStyle} ${
            currentUrl === 'performance-list' ? 'bg-[#000]' : ''
          }`}
        >
          <MdOutlineChecklist className={`${menuBtnIconStyle}`} />
          <span className={`${menuBtnTextStyle}`}>performance list</span>
        </Link>
        <Link
          to="/tutor-dashboard/performance/performance-recording"
          className={`${menuButtonsStyle} ${
            currentUrl === 'performance-recording' ? 'bg-[#000]' : ''
          }`}
        >
          <BsPencilSquare className={`${menuBtnIconStyle}`} />
          <span className={`${menuBtnTextStyle}`}>record performace</span>
        </Link>
      </section>

      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Performance;
