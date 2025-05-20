import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaUserLarge } from 'react-icons/fa6';
import { GiPadlockOpen } from 'react-icons/gi';
import { getAccountsCurrentUrl } from '../../Utils';

const TutorProfile = () => {
  const menuBtnIconStyle = 'text-[1.2rem] m-[0.25rem] text-[#c8c8c8]';
  const menuBtnTextStyle = 'hidden md:text-[0.8rem]';
  const menuButtonsStyle = 'border border-[#c8c8c8] px-[0.2rem] py-[0.2rem]';

  const [currentUrl, setCurrentUrl] = useState('tutor-profile');
  const location = useLocation();

  useEffect(() => {
    setCurrentUrl(getAccountsCurrentUrl(location.pathname));
  }, [location.pathname]);

  return (
    <main>
      <section className="h-[12vh] border-b border-b-[#c8c8c8] py-[0.5rem] px-[0.5rem] flex flex-row gap-[0.3rem] justify-start items-center">
        <Link
          to="/tutor-dashboard/tutor-profile/account"
          className={`${menuButtonsStyle} ${
            currentUrl === 'account' ? 'bg-[#000]' : ''
          }`}
        >
          <FaUserLarge className={`${menuBtnIconStyle}`} />
          <span className={`${menuBtnTextStyle}`}>profile</span>
        </Link>
        <Link
          to="/tutor-dashboard/tutor-profile/reset-password"
          className={`${menuButtonsStyle} ${
            currentUrl === 'reset-password' ? 'bg-[#000]' : ''
          }`}
        >
          <GiPadlockOpen className={`${menuBtnIconStyle}`} />
          <span className={`${menuBtnTextStyle}`}>reset password</span>
        </Link>
      </section>

      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default TutorProfile;
