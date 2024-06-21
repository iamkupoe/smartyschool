import React, { useState } from 'react';
import { Registrations, classArray } from '../../Constants';

const MarkAttendance = () => {
  const [stage, setStage] = useState('');
  const [filteredClass, setFilteredClass] = useState([]);
  const [markDate, setMarkDate] = useState('');
  const textInputStyle =
    'border border-[#525252] rounded-sm px-[0.2rem] py-[0.1rem] w-full outline-none';
  const titleInputContainer = 'mb-[0.5rem]';
  const titleText = 'font-bold w-full';

  const filterRegistrationByClass = () => {
    const filtered = Registrations.filter(
      (students) => students.stage === stage
    );
    setFilteredClass(filtered);
  };

  const selectAllStudents = () => {
    const studentList = Array.from(document.getElementsByClassName('chkBox'));
    const masterChkBox = document.getElementsByClassName('master_chkbox');
    console.log('masterCheckBox:', masterChkBox);
    studentList.map((divElement) => {
      divElement.checked = !masterChkBox[0].checked;
    });
  };

  return (
    <div className={`mx-[0.75rem] my-[1rem]`}>
      <div>
        <div className={titleText}>Class</div>
        <select
          className={textInputStyle}
          value={stage}
          onChange={(e) => {
            setStage(e.target.value);
            filterRegistrationByClass();
          }}
          name=""
          id="class"
        >
          {classArray.map((theStage, index) => {
            return (
              <option value={theStage.name} key={index}>
                {theStage.name}
              </option>
            );
          })}
        </select>
        <div className={`${titleInputContainer} md:w-[30%]`}>
          <div className={titleText}>Date</div>
          <input
            type="date"
            name=""
            value={markDate}
            onChange={(e) => setMarkDate(e.target.value)}
            id="dateInputId"
            className={textInputStyle}
          />
        </div>
      </div>
      <div>
        <section>
          <div className={`flex flex-row justify-between`}>
            <div className={titleText}>Student's name</div>
            <div className={`w-[20%] text-center font-bold`}>Status</div>
          </div>
          <div
            className={`flex flex-row justify-end ${
              filteredClass.length <= 0 ? 'hidden' : ''
            }`}
          >
            <div className={`font-bold`}>Select all</div>
            <div className={`w-[20%] flex flex-row justify-center`}>
              <input
                type="checkbox"
                name="all"
                className="master_chkbox"
                onClick={selectAllStudents}
              />
            </div>
          </div>
        </section>
        <section className="student_list">
          {filteredClass.length > 0 ? (
            filteredClass.map((student, index) => {
              return (
                <div className={`flex flex-row justify-between`}>
                  <div> {student.surname + ' ' + student.otherNames} </div>
                  <div className={`w-[20%] text-center`}>
                    <input type="checkbox" name="all" className="chkBox" />
                  </div>
                </div>
              );
            })
          ) : (
            <div>No reqistered student in this class</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default MarkAttendance;
