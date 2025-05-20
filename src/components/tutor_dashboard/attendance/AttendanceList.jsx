import React from 'react';
import { classArray } from '../../Constants';

const AttendanceList = () => {
  const labelStyle = 'text-[0.8rem]';
  const filterContainers = 'border border-[#c8c8c8] px-[0.3rem]';
  const selectStyle = 'text-[0.8rem]';
  const optionStyle = 'text-[0.8rem]';
  const weekColStyle = 'sticky top-0 bg-gray-200 px-1 py-2 w-[5%]';
  const totalColStyle = 'sticky top-0 bg-gray-200 px-2 py-2 w-[15%] xl:w-[10%]';

  return (
    <div className="p-[0.5rem] flex flex-col h-[88vh]">
      <div className="flex flex-col md:flex-row justify-between items-start p-[0.5rem] bg-[#eeeeee] mb-[0.75rem]">
        <input
          type="search"
          name="name-search"
          placeholder="enter student name"
          className="outline-none border py-[0.2rem] px-[0.6rem]"
        />
        <div className="flex flex-row gap-[0.5rem]">
          <div className={filterContainers}>
            <div className={labelStyle}>class</div>
            <select name="" id="class" className={selectStyle}>
              {classArray.map((stage) => {
                return (
                  <option className={optionStyle} value={stage.value}>
                    {stage.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className={filterContainers}>
            <div className={labelStyle}>gender</div>
            <select name="" id="term" className={selectStyle}>
              <option value="first">all</option>
              <option value="first">boys</option>
              <option value="second">girls</option>
            </select>
          </div>
        </div>
      </div>
      <div className="overflow-x-scroll">
        <table className="table-fixed w-[1000px] lg:w-[100%]">
          <thead className='w-[100%]'>
            <tr>
              <th className="sticky top-0 left-0 bg-gray-200 px-2 py-2 z-20 w-[14%] xl:w-[19%]">
                Full name
              </th>
              <th className={weekColStyle}>W1</th>
              <th className={weekColStyle}>W2</th>
              <th className={weekColStyle}>W3</th>
              <th className={weekColStyle}>W4</th>
              <th className={weekColStyle}>W5</th>
              <th className={weekColStyle}>W6</th>
              <th className={weekColStyle}>W7</th>
              <th className={weekColStyle}>W8</th>
              <th className={weekColStyle}>W9</th>
              <th className={weekColStyle}>W10</th>
              <th className={weekColStyle}>W11</th>
              <th className={weekColStyle}>W12</th>
              <th className={weekColStyle}>W13</th>
              <th className={weekColStyle}>W14</th>
              <th className={totalColStyle}>Total</th>
            </tr>
          </thead>
          <tbody className='w-[100%]'>
            {[...Array(15)].map((_, rowIndex) => (
              <tr key={rowIndex} className=' overflow-auto'>
                <td className="sticky left-0 bg-[#fff] px-2 py-2 z-10">
                  Nhyiraba Serwaa Dankwah
                </td>
                {[...Array(15)].map((_, colIndex) => (
                  <td key={colIndex} className="px-2 py-2 text-center">
                    5
                  </td>
                  
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceList;
