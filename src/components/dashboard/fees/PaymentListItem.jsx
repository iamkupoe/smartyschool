import React from 'react';

const PaymentListItem = ({
  receipt_num,
  amnt,
  date,
  paid_for,
  by,
  as,
  index,
}) => {
  const listAttributeStyle = 'text-[0.8rem]';
  return (
    <div
      className={`flex flex-row py-[0.5rem] px-[0.25rem] border-b border-b-[#eeeeee] w-[60rem] lg:w-full ${
        (index + 1) % 2 === 0 ? 'bg-[#ebebeb]' : ''
      }`}
    >
      <div className={`${listAttributeStyle} w-[10%]`}>{receipt_num}</div>
      <div className={`${listAttributeStyle} w-[16%]`}>{date}</div>
      <div className={`${listAttributeStyle} w-[10%]`}>{`GH₵ ${amnt}`}</div>
      <div className={`${listAttributeStyle} w-[10%]`}>{as}</div>
      <div className={`${listAttributeStyle} w-[23%]`}>{paid_for}</div>
      <div className={`${listAttributeStyle} w-[23%]`}>{by}</div>
      <button className="w-[8%] text-[0.9rem]">view</button>
    </div>
  );
};

export default PaymentListItem;
