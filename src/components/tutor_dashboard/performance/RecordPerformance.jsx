import React, { useState, useEffect } from 'react';
import { classArray, Registrations } from '../../Constants';
import Select from 'react-select';

const RecordPerformance = () => {
  const [stage, setStage] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [filteredClass, setFilteredClass] = useState('');
  const customStyles = {
    control: (provide) => ({
      ...provide,
      border: '1px solid #525252',
    }),
  };
  const textInputStyle =
    'border border-[#525252] rounded-sm px-[0.2rem] py-[0.1rem] w-[100%] outline-none';

  const handleChosenStudent = (selectedStudent) => {
    setSelectedStudent(selectedStudent);
  };

  useEffect(() => {
    setFilteredClass(
      Registrations.filter((reg) => reg.stage === stage).map(
        (filtrate) => {
          return {
            value: `${filtrate.otherNames} ${filtrate.surname}`,
            label: `${filtrate.otherNames} ${filtrate.surname}`,
          };
        }
      )
    );
  }, [stage]);

  return (
    <main>
      <section className="mx-[1rem] my-[1rem]">
        <div>
          <div>class</div>
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
        </div>
        <div>
          <div>Student</div>
          <Select
            value={selectedStudent}
            onChange={handleChosenStudent}
            isSearchable={true}
            options={filteredClass}
            styles={customStyles}
            placeholder="Enter student name to search"
          />
        </div>
      </section>
    </main>
  );
};

export default RecordPerformance;
