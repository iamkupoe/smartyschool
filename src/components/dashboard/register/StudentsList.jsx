import React from 'react';
import { classArray, Registrations } from '../../Constants';
import StudentListItem from './StudentListItem';

const StudentsList = () => {
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
          placeholder="enter student name"
          className="outline-none border py-[0.2rem] px-[0.6rem]"
        />
        <div className="flex flex-row gap-[0.5rem]">
          <div className={filterContainers}>
            <div className={labelStyle}>by class</div>
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
            <div className={labelStyle}>by status</div>
            <select name="" id="term" className={selectStyle}>
              <option clasName={optionStyle} value="scholarship">
                scholarship
              </option>
              <option clasName={optionStyle} value="regular">
                regular
              </option>
            </select>
          </div>
          <div className={filterContainers}>
            <div className={labelStyle}>by gender</div>
            <select name="" id="term" className={selectStyle}>
              <option value="first">boys</option>
              <option value="second">girls</option>
            </select>
          </div>
        </div>
      </div>

      <div
        className="h-[68vh] overflow-y-auto mt-[0.25rem]"
        style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
      >
        <div
          className={`flex flex-row py-[0.5rem] sticky top-0 bg-[#c2c2c2] px-[0.25rem] py-[0.2rem] border-b border-b-[#c2c2c2] w-[39.8rem] lg:w-full`}
        >
          <div className={`${listAttributeStyle} w-[17%]`}>Student Id</div>
          <div className={`${listAttributeStyle} w-[35%]`}>Full Name</div>
          <div className={`${listAttributeStyle} w-[12%]`}>Class</div>
          <div className={`${listAttributeStyle} w-[14%]`}>Transport</div>
          <div className={`${listAttributeStyle} w-[14%]`}>Status</div>
          <div className={`${listAttributeStyle} w-[8%]`}>Action</div>
        </div>
        {Registrations.map((student, index) => {
          return (
            <StudentListItem
              studentId={student.id}
              surname={student.surname}
              otherNames={student.otherNames}
              stage={student.stage}
              transport={student.transport}
              status={student.status}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StudentsList;
