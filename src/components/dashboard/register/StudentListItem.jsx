import React from 'react';

const StudentListItem = ({
  studentId,
  surname,
  otherNames,
  stage,
  transport,
  status,
  index,
}) => {
  const listAttributeStyle = 'text-[0.9rem]';
  return (
    <div
      className={`flex flex-row py-[0.5rem] px-[0.25rem] border-b border-b-[#eeeeee] w-[39.8rem] lg:w-full ${
        (index + 1) % 2 === 0 ? 'bg-[#ebebeb]' : ''
      }`}
    >
      <div className={`${listAttributeStyle} w-[17%]`}>{studentId}</div>
      <div
        className={`${listAttributeStyle} w-[35%]`}
      >{`${surname} ${otherNames}`}</div>
      <div className={`${listAttributeStyle} w-[12%]`}>{stage}</div>
      <div className={`${listAttributeStyle} w-[14%]`}>
        {transport ? 'School bus' : 'commute'}
      </div>
      <div className={`${listAttributeStyle} w-[14%]`}>{status}</div>
      <button className="w-[8%] text-[0.9rem]">view</button>
    </div>
  );
};

export default StudentListItem;
