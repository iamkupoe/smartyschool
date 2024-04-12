import React from 'react';
import { classArray, Payments } from '../../Constants';
import PaymentListItem from './PaymentListItem';

const PaymentList = () => {
  const selectStyle = 'text-[0.8rem]';
  const optionStyle = 'text-[0.8rem]';
  const labelStyle = 'text-[0.8rem]';
  const filterContainers = 'border border-[#c8c8c8] px-[0.3rem]';
  const listAttributeStyle = 'text-[0.8rem] font-bold';

  return (
    <div className="p-[0.5rem]">
      <div className="flex flex-col md:flex-row justify-between items-start p-[0.5rem] bg-[#eeeeee]">
        <input
          type="search"
          name="name-search"
          placeholder="enter receipt number"
          className="outline-none border py-[0.2rem] px-[0.6rem]"
        />
        <div className="flex flex-row gap-[0.5rem]">
          <div className={filterContainers}>
            <div className={labelStyle}>by term</div>
            <select name="" id="class" className={selectStyle}>
              <option clasName={optionStyle} value="first">
                first
              </option>
              <option clasName={optionStyle} value="second">
                second
              </option>
              <option clasName={optionStyle} value="third">
                third
              </option>
            </select>
          </div>
          <div className={filterContainers}>
            <div className={labelStyle}>by mode</div>
            <select name="" id="term" className={selectStyle}>
              <option clasName={optionStyle} value="momo">
                momo
              </option>
              <option clasName={optionStyle} value="cash">
                cash
              </option>
            </select>
          </div>
          <div className={filterContainers}>
            <div className={labelStyle}>by academic yr</div>
            <select name="" id="term" className={selectStyle}>
              <option value="2023/2024">2023/2024</option>
              <option value="2024/2025">2024/2025</option>
            </select>
          </div>
        </div>
      </div>

      <div
        className="h-[66vh] md:h-[68vh] overflow-y-auto mt-[0.25rem]"
        style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
      >
        <div
          className={`flex flex-row py-[0.5rem] sticky top-0 bg-[#c2c2c2] px-[0.25rem] py-[0.2rem] border-b border-b-[#c2c2c2] w-[60rem] lg:w-full`}
        >
          <div className={`${listAttributeStyle} w-[10%]`}>Receipt #</div>
          <div className={`${listAttributeStyle} w-[16%]`}>Date</div>
          <div className={`${listAttributeStyle} w-[10%]`}>Amount</div>
          <div className={`${listAttributeStyle} w-[10%]`}>Paid as</div>
          <div className={`${listAttributeStyle} w-[23%]`}>Paid for</div>
          <div className={`${listAttributeStyle} w-[23%]`}>Paid by</div>
          <div className={`${listAttributeStyle} w-[8%]`}>Action</div>
        </div>
        {Payments.map((payment, index) => {
          return (
            <PaymentListItem
              receipt_num={payment.receipt_num}
              date={payment.date}
              amnt={payment.amnt}
              as={payment.as}
              paid_for={payment.paid_for}
              by={payment.by}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PaymentList;
