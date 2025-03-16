import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

const MarksCard = ({ title, actual_mrk, total_mrk }) => {
  const [actualmrk, setActualMrk] = useState(actual_mrk);
  const [totalMrk, setTotalMark] = useState(total_mrk);

  const inputStyle =
    'w-[2.5rem] bg-transparent border-solid border border-[#212529] outline-none px-[0.3rem]';
  return (
    <div className="bg-[#EBEBEB] p-[5px] my-[0.5rem] w-[99%] sm:w-[48%] ">
      <div className="flex flex-row justify-between">
        <div>{title}</div>
        <div type="button" className="bg-transparent outline-none">
          <MdDelete className="text-[#d00000] text-[1.2rem]" />
        </div>
      </div>
      <div className="flex row">
        <div>Marks:</div>
        <input
          type="number"
          value={actualmrk}
          className={inputStyle}
          onChange={(e) => setActualMrk(e.target.value)}
        />
        out of
        <input
          type="number"
          className={inputStyle}
          value={totalMrk}
          onChange={(e) => setTotalMark(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MarksCard;
