import React, { useEffect, useState } from 'react';
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { PiBooksThin } from 'react-icons/pi';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getRegisterCurrentScreen } from '../../Utils';

const Register = () => {
  const menuButtonsStyle = 'border border-[#c8c8c8] px-[0.2rem] py-[0.2rem]';
  const menuBtnIconStyle = 'text-[1.8rem] text-[#c8c8c8]';
  const menuBtnTextStyle = 'hidden md:text-[0.8rem]';

  const [currentUrl, setCurrentUrl] = useState('registration');
  const location = useLocation();

  useEffect(() => {
    setCurrentUrl(getRegisterCurrentScreen(location.pathname));
  }, [location.pathname]);

  console.log('RegisterCurrentURL:', currentUrl);

  return (
    <main className="flex flex-col">
      <section className="border-b border-b-[#c8c8c8] h-[12vh] py-[0.5rem] px-[0.5rem] flex flex-row gap-[0.25rem] justify-start items-center">
        <Link
          to="/dashboard/register/registrations"
          className={`${menuButtonsStyle} ${currentUrl === 'registration' ? 'bg-[#000]' : ''
            }`}
        >
          <PiBooksThin className={`${menuBtnIconStyle}`} />
          <span className={`${menuBtnTextStyle}`}>register</span>
        </Link>
        <Link
          className={`${menuButtonsStyle} ${currentUrl === 'registration-form' ? 'bg-[#000]' : ''
            }`}
          to="/dashboard/register/registration-form"
        >
          <AiOutlineUsergroupAdd className={`${menuBtnIconStyle} `} />
          <span className={`${menuBtnTextStyle}`}>student</span>
        </Link>
        <Link className={`${menuButtonsStyle} ${currentUrl === 'staff-reg-form' ? `bg-[#000]` : ``}`} to="/dashboard/register/staff-reg-form" >
          <AiOutlineUserAdd className={`${menuBtnIconStyle}`} />
          <span className={`${menuBtnTextStyle}`}>tutor</span>
        </Link>
      </section>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Register;
