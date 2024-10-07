import React, { useState } from 'react';

const MarksCard = ({ title, actual_mrk, total_mrk }) => {
  const [actualmrk, setActualMrk] = useState(actual_mrk);
  const [totalMrk, setTotalMark] = useState(total_mrk);

  const inputStyle = 'w-[2rem]';
  return (
    <div className="bg-[#EBEBEB] p-[5px] my-[0.5rem]">
      <div>{title}</div>
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
