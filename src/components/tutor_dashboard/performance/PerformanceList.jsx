import React, { useState } from "react";
import { classArray, performance } from "../../Constants";
import { forEachChild } from "typescript";

const PerformanceList = () => {
  const [level, setLevel] = useState();

  const calculateTotal = (data) => {
    let numerator = 0;
    let denominator = 0;
    data.map((element) => {
      const [num, denom] = element.split("/").map(Number);
      numerator = numerator + num;
      denominator = denominator + denom;
    });
    return numerator + "/" + denominator;
  };

  const calculatePercentage=(data)=>{
    const [num,denom]=data.split("/").map(Number)
    return (num/denom)*100+"%"
  }

  const labelStyle = "text-[0.8rem]";
  const filterContainers = "border border-[#c8c8c8] px-[0.3rem]";
  const selectStyle = "text-[0.8rem]";
  const optionStyle = "text-[0.8rem]";
  // const weekColStyle = 'sticky top-0 bg-gray-200 px-1 py-2 w-[5%]';
  // const totalColStyle = 'sticky top-0 bg-gray-200 px-2 py-2 w-[15%] xl:w-[10%]';

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
            <div className={labelStyle}>subject</div>
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
          <thead className="w-[100%]">
            <tr>
              <th className="sticky top-0 left-0 bg-gray-200 px-2 py-2 z-20 w-[20%] xl:w-[19%]">
                Full name
              </th>
              <th className="sticky top-0 bg-gray-200 px-1 py-2 w-[9%]">
                Exercises
              </th>
              <th className="sticky top-0 bg-gray-200 px-1 py-2 w-[11%]">
                Assignments
              </th>
              <th className="sticky top-0 bg-gray-200 px-1 py-2 w-[9%]">
                Tests
              </th>
              <th className="sticky top-0 bg-gray-200 px-1 py-2 w-[11%]">
                Practicals
              </th>
              <th className="sticky top-0 bg-gray-200 px-1 py-2 w-[9%]">
                Exams
              </th>
              <th className="sticky top-0 bg-gray-200 px-1 py-2 w-[9%]">
                Total
              </th>
              <th className="sticky top-0 bg-gray-200 px-1 py-2 w-[11%]">
                Percentage
              </th>
              <th className="sticky top-0 bg-gray-200 px-1 py-2 w-[11%]">
                Class rank
              </th>
            </tr>
          </thead>
          <tbody className="w-[100%]">
            {performance &&
              performance.map((perform, rowIndex) => (
                <tr key={rowIndex} className=" overflow-auto">
                  <td className="sticky left-0 bg-[#fff] px-2 py-2 z-10">
                    {perform.name}
                  </td>
                  {[
                    perform.exercise,
                    perform.assignment,
                    perform.test,
                    perform.practical,
                    perform.exams,
                  ].map((element, index) => (
                    <td key={index} className="px-2 py-2 text-center">
                      {element}
                    </td>
                  ))}

                  <td className="px-2 py-2 text-center">
                    {calculateTotal([
                      perform.exercise,
                      perform.assignment,
                      perform.test,
                      perform.practical,
                      perform.exams,
                    ])}
                  </td>
                  <td className="px-2 py-2 text-center">{parseFloat(calculatePercentage(calculateTotal([
                      perform.exercise,
                      perform.assignment,
                      perform.test,
                      perform.practical,
                      perform.exams,
                    ]))).toFixed(1)+"%"}</td>
                  <td className="px-2 py-2 text-center">{"2nd"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceList;
