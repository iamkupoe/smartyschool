import React, { useState, useEffect } from 'react';
import {
  classArray,
  Registrations,
  primary,
  jhs,
  preschool,
} from '../../Constants';
import Select from 'react-select';

const RecordPerformance = () => {
  const [stage, setStage] = useState('');
  const [subjects, setSubjects] = useState('');
  const [subject, setSubject] = useState('');
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
      Registrations.filter((reg) => reg.stage === stage).map((filtrate) => {
        return {
          value: `${filtrate.otherNames} ${filtrate.surname}`,
          label: `${filtrate.otherNames} ${filtrate.surname}`,
        };
      })
    );
    if (
      stage === 'Basic 1' ||
      stage === 'Basic 2' ||
      stage === 'Basic 3' ||
      stage === 'Basic 4' ||
      stage === 'Basic 5' ||
      stage === 'Basic 6'
    ) {
      setSubjects(primary);
    } else if (stage === 'JHS 1' || stage === 'JHS 2' || stage === 'JHS 3') {
      setSubjects(jhs);
    } else {
      setSubjects(preschool);
    }
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
        <div>
          <div>Subject</div>
          <select
            className={textInputStyle}
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            name=""
            id="class"
          >
            {subjects &&
              subjects.map((thesub, index) => {
                return (
                  <option value={thesub} key={index}>
                    {thesub}
                  </option>
                );
              })}
          </select>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default RecordPerformance;
