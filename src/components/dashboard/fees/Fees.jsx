import React, { useEffect, useState } from 'react';
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { GiMoneyStack, GiPayMoney } from 'react-icons/gi';
import {
  MdOutlinePayments,
  MdListAlt,
  MdOutlineFastfood,
} from 'react-icons/md';
import { PiBooksThin } from 'react-icons/pi';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getFeesCurrentScreen } from '../../Utils';

function Fees() {
  const menuButtonsStyle = 'border border-[#c8c8c8] px-[0.2rem] py-[0.2rem]';
  const menuBtnIconStyle = 'text-[1.8rem] text-[#c8c8c8]';
  const menuBtnTextStyle = 'hidden md:text-[0.8rem]';

  const [currentUrl, setCurrentUrl] = useState('payments');
  const location = useLocation();

  useEffect(() => {
    setCurrentUrl(getFeesCurrentScreen(location.pathname));
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
          <GiMoneyStack className={`${menuBtnIconStyle}`} />
          <span className={`${menuBtnTextStyle}`}>payments</span>
        </Link>
        <Link
          className={`${menuButtonsStyle} ${
            currentUrl === 'payment-form' ? 'bg-[#000]' : ''
          }`}
          to="/dashboard/fees/payment-form"
        >
          <GiPayMoney className={`${menuBtnIconStyle} `} />
          <span className={`${menuBtnTextStyle}`}>payform</span>
        </Link>
        <Link
          className={`${menuButtonsStyle} ${
            currentUrl === 'feeding-pay' ? 'bg-[#000]' : ''
          }`}
          to="/dashboard/fees/feeding-pay"
        >
          <MdOutlineFastfood className={`${menuBtnIconStyle}`} />
          <span className={`${menuBtnTextStyle}`}>feeding</span>
        </Link>
      </section>
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default Fees;
