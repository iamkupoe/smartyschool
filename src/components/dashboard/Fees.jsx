import React, { useEffect, useState } from 'react';
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { PiBooksThin } from 'react-icons/pi';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getFeesCurrentScreen } from '../Utils';

function Fees() {
  const menuButtonsStyle = 'border border-[#c8c8c8] px-[0.2rem] py-[0.2rem]';
  const menuBtnIconStyle = 'text-[1.8rem] text-[#c8c8c8]';
  const menuBtnTextStyle = 'hidden md:text-[0.8rem]';

  const [currentUrl, setCurrentUrl] = useState('payments');
  const location = useLocation();

  useEffect(() => {
    setCurrentUrl(getFeesCurrentScreen(location.pathname));
    console.log("current:",currentUrl)
  }, [location.pathname]);

  return (
    <main className="flex flex-col">
      <section className="border-b border-b-[#c8c8c8] h-[12vh] py-[0.5rem] px-[0.5rem] flex flex-row gap-[0.25rem] justify-start items-center">
        <Link
          to="/dashboard/fees/payments"
          className={`${menuButtonsStyle} ${
            currentUrl === 'payments' ? 'bg-[#000]' : ''
          }`}
        >
          <PiBooksThin className={`${menuBtnIconStyle}`} />
          <span className={`${menuBtnTextStyle}`}>payments</span>
        </Link>
        <Link
          className={`${menuButtonsStyle} ${
            currentUrl === 'payment-form' ? 'bg-[#000]' : ''
          }`}
          to="/dashboard/fees/payment-form"
        >
          <AiOutlineUsergroupAdd className={`${menuBtnIconStyle} `} />
          <span className={`${menuBtnTextStyle}`}>student</span>
        </Link>
        <Link className={`${menuButtonsStyle}`}>
          <AiOutlineUserAdd className={`${menuBtnIconStyle}`} />
          <span className={`${menuBtnTextStyle}`}>tutor</span>
        </Link>
      </section>
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default Fees;
