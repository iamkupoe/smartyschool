import React from 'react';
import '../../css/FeesComponent.css';

const FeesComponent = ({ icon, type, expected, balance, paid }) => {
  return (
    <div className="flex flex-row w-[100%] sm:w-[48%] lg:w-[32%] xl:w-[24%]">
      <div className="bg-[#fa8128] px-[0.8rem] w-[30%] flex flex-row justify-center items-center">
        {icon}
      </div>
      <div className="bg-[#f2f2f2] w-[70%] px-[0.5rem]">
        <h2 className="text-[1rem] 2xl:text-[2rem] font-bold ">{type}</h2>
        <p className="text-[#1338be] lg:text-[0.9rem] 2xl:text-[1.8rem]">
          <span className="font-bold">Expected:</span>
          <span className="">{'GH₵ ' + expected}</span>
        </p>
        <p className="text-[#3cb043]  lg:text-[0.9rem] 2xl:text-[1.5rem]">
          <span className="font-bold">Paid:</span>
          <span className="metrics-value"> {'GH₵ ' + paid}</span>
        </p>
        <p className="text-[#b90e0a] lg:text-[0.9rem] 2xl:text-[1.5rem]">
          <span className="font-bold">Balance:</span>
          <span className="">{'GH₵ ' + balance}</span>
        </p>
      </div>
    </div>
  );
};

export default FeesComponent;
