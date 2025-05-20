import React, { useState, useEffect } from 'react';
import {
  classArray,
  Registrations,
  primary,
  jhs,
  preschool,
} from '../../Constants';
import Select from 'react-select';
import MarksCard from './MarksCard';

const RecordPerformance = () => {
  const [stage, setStage] = useState('');
  const [subjects, setSubjects] = useState('');
  const [subject, setSubject] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [filteredClass, setFilteredClass] = useState('');
  const [exercise, setExercise] = useState([
    { actMark: 7, totalMark: 10 },
    { actMark: 5, totalMark: 5 },
    { actMark: 6, totalMark: 10 },
    { actMark: 18, totalMark: 20 },
  ]);
  const [tests, setTests] = useState([
    { actMark: 7, totalMark: 10 },
    { actMark: 5, totalMark: 5 },
    { actMark: 6, totalMark: 10 },
  ]);
  const [practicals, setPracticals] = useState([
    { actMark: 22, totalMark: 25 },
  ]);

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

  const handleAddMoreExercise = () => {
    setExercise([...exercise, { actMark: '', totalMark: '' }]);
  };
  const handleAddMoreTests = () => {
    setTests([...tests, { actMark: '', totalMark: '' }]);
  };
  const handleAddMorePracticals = () => {
    setPracticals([...tests, { actMark: '', totalMark: '' }]);
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
    <main className='h-[88vh] overflow-x-scroll sm:px-[4rem] md:px-[0.5rem]'>
      <section className="mx-[1rem] my-[1rem] md:flex md:flex-row justify-between align-top lg:justify-start lg:gap-[1.5rem]">
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
      <section className="mx-[1rem] my-[1rem] flex flex-col gap-[1.5rem] ">
        <div className="border b-[2px] p-[0.5rem]   ">
          <div className="flex flex-row justify-between align-center">
            <p>Exercises</p>
            <a className="text-[0.8rem]" onClick={handleAddMoreExercise}>
              add more
            </a>
          </div>
          <div className=" md:h-[45vh] overflow-y-auto flex flex-row align-top gap-2 flex-wrap ">
            {exercise &&
              exercise.map((ex, index) => {
                return (
                  <MarksCard
                    title={`Exercise ${index + 1}`}
                    actual_mark={ex.actMark}
                    total_mark={ex.totalMark}
                  />
                );
              })}
          </div>

          <input
            type="submit"
            value="save"
            className="w-[100%] bg-[#4169e1] text-[#ffffff] border-r-md"
          />
        </div>
        <div className="border b-[2px] p-[0.5rem] ">
          <div className="flex flex-row justify-between align-center">
            <p>Tests</p>
            <a className="text-[0.8rem]" onClick={handleAddMoreTests}>
              add more
            </a>
          </div>
          <div className="overflow-y-scroll h-[30vh] flex flex-row align-top gap-2 flex-wrap">
            {tests &&
              tests.map((ex, index) => {
                return (
                  <MarksCard
                    title={`Assessment Test ${index + 1}`}
                    actual_mark={ex.actMark}
                    total_mark={ex.totalMark}
                  />
                );
              })}
          </div>

          <input
            type="submit"
            value="save"
            className="w-[100%] bg-[#4169e1] text-[#ffffff]"
          />
        </div>
        <div className="border b-[2px] p-[0.5rem]">
          <div className="flex flex-row justify-between align-center">
            <p>Practicals</p>
            <a className="text-[0.8rem]" onClick={handleAddMorePracticals}>
              add more
            </a>
          </div>
          <div className="overflow-y-scroll h-[15vh] flex flex-row align-top gap-2 flex-wrap">
            {practicals &&
              practicals.map((ex, index) => {
                return (
                  <MarksCard
                    title={`Practical ${index + 1}`}
                    actual_mark={ex.actMark}
                    total_mark={ex.totalMark}
                  />
                );
              })}
          </div>

          <input
            type="submit"
            value="save"
            className="w-[100%] bg-[#4169e1] text-[#ffffff]"
          />
        </div>
      </section>
    </main>
  );
};

export default RecordPerformance;
