import React, { useEffect, useState, useRef } from 'react';
import { Registrations, classArray } from '../../Constants';
import { use } from 'react';

const FeedingPayment = () => {
  const [stage, setStage] = useState('');
  const [students, setStudents] = useState([]);
  const [chckblist, setChckblist] = useState(0);
  const [studentList, setStudentList] = useState(document.getElementById('student-list'));

  const checkBoxRef = useRef(null);

  const selectAllChckbox = document.getElementById('select-all-chckb');

  console.log("select:", studentList)

  const handleSelectAll = () => {


    checkBoxRef.current.checked ?
      [...studentList].map((student) => {
        student.children[1].checked = true
      }) : [...studentList].map((student) => {
        student.children[1].checked = false
        
      });
    
  }

  useEffect(() => {
    chckblist > 0 ? (selectAllChckbox.checked = false, setChckblist(0)) : null
  }, [chckblist]);

  useEffect(() => {
    setStudentList(document.getElementById('student-list').children);
  }, [stage]);

  useEffect(() => {
    const filteredStudents = Registrations.filter((registrant) => {
      return stage === registrant.stage;
    }).map((registrant) => `${registrant.surname} ${registrant.otherNames}`);
    setStudents(filteredStudents);
  }, [stage]);

  const paymentTitle = 'font-bold text-[#333333]';

  return (
    <main>
      <div className="flex flex-col-reverse md:flex-row md:gap-[2rem] mx-[1rem] my-[1rem]  ">
        <div className="p-[0.25rem] border border-[#C2C2C2] md:w-[60%]">
          <div className="flex flex-col mb-[1rem]">
            <select
              value={stage}
              onChange={(e) => {
                setStage(e.target.value);

              }}
            >
              {classArray.map((stage) => {
                return <option value={stage.value}>{stage.name}</option>;
              })}
            </select>
          </div>
          <div className="h-[50vh] overflow-y-auto">
            <div className="flex flex-row gap-[1rem] p-[0.25rem] bg-[#B8B8B8] sticky top-0">
              <div className={`${paymentTitle} w-[80%]`}>Student name</div>
              <div className={`${paymentTitle} w-[20%]`}>Paid</div>
            </div>
            <div
              id='select-all-container'
              className={`${students.length === 0 ? 'hidden' : 'block'
                } flex flex-row gap-[1rem] p-[0.25rem]`}
            >
              <div className="w-[80%] text-right">Select all</div>
              <input type="checkbox" name="Paid" id='select-all-chckb' ref={checkBoxRef} className="text-right" onChange={() => {
                console.log("Checkbox:", checkBoxRef.current.checked)
                handleSelectAll();
              }} />
            </div>
            <div id="student-list">

              {students.length === 0
                ? 'No student is enrolled in this class'
                : students.map((student, index) => {
                  return (
                    <div id={`${index}`} className="flex flex-row gap-[1rem] p-[0.25rem]">
                      <div className="w-[80%]">{student}</div>
                      <input type="checkbox" name="Paid" onChange={(e) => { e.currentTarget.checked === false ? setChckblist(index + 1) : null; }} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="h-[20vh] md:h-auto md:w-[45%] overflow-y-auto mb-[1rem] border border-[#C2C2C2] px-[0.25rem] pb-[0.25rem]">
          <h3 className="sticky top-0 bg-[#ffffff] font-bold">Payment meter</h3>
          {classArray.map((stage, index) => {
            return (
              <div
                className={`flex flex-row gap-[1rem] ${(index + 1) % 2 === 1 ? 'bg-[#eeeeee]' : ''
                  }`}
              >
                <div className={`w-[45%] text-[0.8rem] p-[0.2rem]`}>
                  {stage.name}
                </div>
                <div className="w-[20%] text-[0.8rem] p-[0.2rem]">
                  {'10/11'}
                </div>
                <div className="w-[35%] text-[0.8rem] p-[0.2rem]">{`GH₵ 100`}</div>
              </div>
            );
          })}
          <div className={`flex flex-row gap-[1rem] bg-[#eeeeee]`}>
            <div className="w-[65%] text-[0.8rem] font-bold p-[0.2rem] text-right">
              Total
            </div>
            <div className="w-[35%] text-[0.8rem] p-[0.2rem] pl-[0.5rem]">{`GH₵ 1400`}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeedingPayment;
