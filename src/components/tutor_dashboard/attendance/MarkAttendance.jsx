import React, { useEffect, useState } from 'react';
import { Registrations, classArray } from '../../Constants';

const MarkAttendance = () => {
  const [stage, setStage] = useState('');
  const [filteredClass, setFilteredClass] = useState([]);
  const [markDate, setMarkDate] = useState('');
  const textInputStyle =
    'border border-[#525252] rounded-sm px-[0.2rem] py-[0.1rem] w-[100%] outline-none';
  const titleInputContainer = 'mb-[0.5rem]';
  const titleText = 'font-bold w-full';

  const filterRegistrationByClass = () => {
    const masterChkBox = document.getElementsByClassName('master_chkbox');

    if (masterChkBox[0].checked) {
      masterChkBox[0].checked = false;
    }
    setFilteredClass(
      Registrations.filter((students) => students.stage === stage)
    );
  };

  const selectAllStudents = () => {
    const studentList = Array.from(
      document.getElementsByClassName('inputListItem')
    ).map((child) => {
      return child.children[0];
    });
    const masterChkBox = document.getElementsByClassName('master_chkbox');

    studentList.map((divElement) => {
      divElement;
      divElement.checked = masterChkBox[0].checked ? true : false;
    });
  };

  const uncheckMainChkBox = (e) => {
    const masterChkBox = document.getElementsByClassName('master_chkbox');
    if (e.target.checked === false) {
      masterChkBox.checked = false;
    }
  };

  useEffect(() => {
    filterRegistrationByClass();
  }, [stage]);

  return (
    <div
      className={`mx-[0.75rem] my-[1rem] flex flex-col sm:mx-[6rem] md:flex-row md:mx-[1.5rem] md:justify-between md:gap-[1rem]`}
    >
      <div className={` md:w-[50%]`}>
        <div className={titleText}>Class</div>
        <select
          className={textInputStyle}
          value={stage}
          onChange={(e) => {
            setStage(e.target.value);
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
        <div className={`${titleInputContainer} md:w-[50%]`}>
          <div className={titleText}>Date</div>
          <input
            type="date"
            name=""
            value={markDate}
            onChange={(e) => setMarkDate(e.target.value)}
            id="dateInputId"
            className={`border border-[#525252] rounded-sm px-[0.2rem] py-[0.1rem] w-[100%] md:w-[200%] outline-none`}
          />
        </div>
      </div>
      <div className={`md:w-[50%]`}>
        <section className="width-[100%">
          <div className={`flex flex-row justify-between`}>
            <div className={titleText}>Student's name</div>
            <div className={`w-[20%] text-center font-bold`}>Status</div>
          </div>
          <div
            className={`flex flex-row justify-end p-[0.2rem] bg-[#eeeeee] ${
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
                <div
                  className={`flex flex-row justify-between p-[0.2rem] ${
                    index % 2 > 0 ? 'bg-[#eeeeee]' : ''
                  } `}
                >
                  <div> {student.surname + ' ' + student.otherNames} </div>
                  <div className={`w-[20%] text-center inputListItem`}>
                    <input
                      type="checkbox"
                      name="all"
                      // className="chkBox"
                      onClick={(e) => uncheckMainChkBox(e)}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div>No reqistered student in this class</div>
          )}
        </section>
        {filteredClass.length > 0 ? (
          <input
            type="submit"
            className="bg-[#0073cf] my-[0.5rem] text-[#fff] text-[1rem] lg:text-[1.5rem] p-[0.25rem] lg:p-[0.3rem] w-full  rounded-md outline-none"
            value="Save"
            name="Save"
          />
        ) : null}
      </div>
    </div>
  );
};

export default MarkAttendance;
