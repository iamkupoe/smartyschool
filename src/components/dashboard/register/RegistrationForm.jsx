import React, { useState } from 'react';
import logo from '../../../assets/images/school_logo.png';
import { RegisterStudent } from '../../sample_db/students';
import { Registrations } from '../../Constants';

const RegistrationForm = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [regDate, setRegDate] = useState('');
  const [studentId, setStudentId] = useState('0000000000');
  const [academicYr, setAcademicYr] = useState('');
  const [stage, setStage] = useState('');
  const [term, setTerm] = useState('');
  const [surname, setSurname] = useState('');
  const [otherNames, setOtherNames] = useState('');
  const [nationality, setNationality] = useState('');
  const [religion, setReligion] = useState('');
  const [dob, setDob] = useState('');
  const [pob, setPob] = useState('');
  const [gender, setGender] = useState('');
  const [digiAddress, setDigiAddress] = useState('');
  const [dadName, setDadName] = useState('');
  const [dadJob, setDadJob] = useState('');
  const [dadPhone, setDadPhone] = useState('');
  const [dadDigiAddress, setDadDigiAddress] = useState('');
  const [mumName, setMumName] = useState('');
  const [mumJob, setMumJob] = useState('');
  const [mumPhone, setMumPhone] = useState('');
  const [mumMumDigiAddress, setMumDigiAddress] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // Create a FileReader object
      reader.readAsDataURL(file); // Read the file as a data URL
      reader.onload = () => {
        setSelectedImage(reader.result); // Update the selected image URL in the state
      };
    }
  };

  const handleRegisterStudent = () => {
    const data = {
      regDate,
      studentId,
      academicYr,
      stage,
      term,
      surname,
      otherNames,
      nationality,
      religion,
      dob,
      pob,
      gender,
      digiAddress,
      dadName,
      dadJob,
      dadPhone,
      dadDigiAddress,
      mumName,
      mumJob,
      mumPhone,
      mumMumDigiAddress,
    }
    Registrations.push(data);
    console.log("Registered student")
  }

  const titleText = 'font-bold w-full';
  const sectionContainer =
    'px-[0.4rem] flex flex-col md:flex-row md:gap-[0.5rem]';
  const textInputStyle =
    'border border-[#525252] rounded-sm px-[0.2rem] py-[0.1rem] w-full outline-none';
  const titleInputContainer = 'mb-[0.5rem]';

  return (
    <div className="bg-[#fff]">
      <div
        className="h-[88vh] overflow-y-auto"
        style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
      >
        <div className="px-[3%] md:mx-[5%] lg:mx-[8%] md:px-[2%] lg:px-[10%] pt-[1.5rem] mt-[1rem] shadow-xl">
          <div className="flex flex-row justify-between items-start p-[0.2rem] border-b ">
            <div className="w-[4.5rem] h-[4.5rem] md:w-[7rem] md:h-[7rem] p-[0.5rem] border">
              <img src={logo} className="w-[100%]" alt="school crest" />
            </div>
            <div className="self-center">
              <h2 className="text-[0.8rem] text-center leading-tight">
                Dashen Hills Montessori
              </h2>

              <h2 className="text-[0.8rem] text-center">Admission Form</h2>
            </div>

            <div className=" flex flex-col items-center w-[4.5rem] h-[4.5rem] md:w-[7rem] md:h-[7rem]">
              {/* Input to select image */}
              <input
                type="file"
                id="image_selector"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />

              {/* Display the selected image */}

              <label
                for="image_selector"
                className="border border-[#eeeeee] flex flex-col jusitify-start items-center"
              >
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected Image"
                    className="self-center w-[3.5rem] h-[3.5rem] md:w-[6rem] md:h-[6rem] m-[0] p-[0]"
                  />
                ) : (
                  <h2 className="text-[0.6rem] w-[3.5rem] h-[3.5rem] md:w-[6rem] md:h-[6rem] font-center">
                    upload student image
                  </h2>
                )}
                <div className="m-0 p-0 h-[0.7rem] md:h-[1rem] flex flex-row justify-center items-center">
                  <span className="text-bolder text-[0.6rem] md:text-[0.75rem]  text-[#000000] m-0 p-0 self-center">
                    ID:
                  </span>
                  <span className="text-[0.6rem] md:text-[0.75rem] m-0 p-0 self-center">
                    {studentId}
                  </span>
                </div>
              </label>
            </div>
          </div>
          <div className={sectionContainer}>
            <div className={`${titleInputContainer} md:w-[30%]`}>
              <div className={titleText}>date</div>
              <input
                type="date"
                name=""
                value={regDate}
                onChange={(e) => setRegDate(e.target.value)}
                id="dateInputId"
                className={textInputStyle}
              />
            </div>

            <div className={`${titleInputContainer} md:w-[27%]`}>
              <div className={titleText}>academic year</div>
              <input
                type="text"
                name=""
                value={academicYr}
                onChange={(e) => setAcademicYr(e.target.value)}
                id="academicYrInputId"
                className={textInputStyle}
              />
            </div>
            <div className={`${titleInputContainer} md:w-[25%]`}>
              <div className={titleText}>class</div>
              <select
                className={textInputStyle}
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                name=""
                id="class"
              >
                <option value="Creche">Creche</option>
                <option value="Nursery 1">Nursery 1</option>
                <option value="Nursery 2">Nursery 2</option>
                <option value="KG 1">Kindergateen 1</option>
                <option value="KG 2">Kindergateen 2</option>
                <option value="Basic 1">Basic 1</option>
                <option value="Basic 2">Basic 2</option>
                <option value="Basic 3">Basic 3</option>
                <option value="Basic 4">Basic 4</option>
                <option value="Basic 5">Basic 5</option>
                <option value="Basic 6">Basic 6</option>
                <option value="JHS1">J. H. S 1</option>
                <option value="JHS2">J. H. S 2</option>
                <option value="JHS3">J. H. S 3</option>
              </select>
            </div>
            <div className={`${titleInputContainer} md:w-[18%]`}>
              <div className={titleText}>term</div>
              <select
                className={textInputStyle}
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                name=""
                id="term"
              >
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
              </select>
            </div>
          </div>

          <div className={sectionContainer}>
            <div className={`${titleInputContainer} md:w-[40%]`}>
              <div className={titleText}>surname</div>
              <input
                type="text"
                name=""
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                id="surnameInputId"
                className={`${textInputStyle} `}
              />
            </div>
            <div className={`${titleInputContainer} md:w-[60%]`}>
              <div className={titleText}>other names</div>
              <input
                type="text"
                name=""
                value={otherNames}
                onChange={(e) => setOtherNames(e.target.value)}
                id="otherNamesInputId"
                className={textInputStyle}
              />
            </div>
          </div>
          <div className={sectionContainer}>
            <div className={`${titleInputContainer} md:w-[30%]`}>
              <div className={titleText}>date of birth</div>
              <input
                type="date"
                name=""
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                id="DOBInputId"
                className={textInputStyle}
              />
            </div>

            <div className={`${titleInputContainer} md:w-[50%]`}>
              <div className={titleText}>place of birth</div>
              <input
                type="text"
                name=""
                value={pob}
                onChange={(e) => setPob(e.target.value)}
                id="placeOfBirthInputId"
                className={textInputStyle}
              />
            </div>
            <div className={`${titleInputContainer} md:w-[20%]`}>
              <div className={titleText}>gender</div>
              <select
                className={textInputStyle}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                name=""
                id="gender"
              >
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
          </div>

          <div className={sectionContainer}>
            <div className={`${titleInputContainer} md:w-[35%]`}>
              <div className={titleText}>nationality</div>
              <input
                type="text"
                name=""
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                id="nationalityInputId"
                className={textInputStyle}
              />
            </div>

            <div className={`${titleInputContainer} md:w-[35%]`}>
              <div className={titleText}>religion</div>
              <input
                type="text"
                name=""
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
                id="religionInputId"
                className={textInputStyle}
              />
            </div>

            <div className={`${titleInputContainer} md:w-[30%]`}>
              <div className={titleText}>digital address</div>
              <input
                type="text"
                className={textInputStyle}
                value={digiAddress}
                onChange={(e) => setDigiAddress(e.target.value)}
                id="studentDigiAddressId"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-[0.5rem]">
            <div className={sectionContainer}>
              <div
                className={`${titleInputContainer} flex flex-row gap-[0.25rem]`}
              >
                <input
                  type="checkbox"
                  name="transportStatus"
                  className="transport-Register"
                  id="transportId-Register"
                />

                <label className="transportLabel" for="transportStatus">
                  transport
                </label>
              </div>
            </div>
            <div className={sectionContainer}>
              <div
                className={`${titleInputContainer} flex flex-row gap-[0.25rem]`}
              >
                <input
                  type="checkbox"
                  name="specialStudentStatusCheckbox"
                  className="specialStudentStatus"
                  id="specialStudentId-Register"
                />

                <label
                  className="specialStudentLabel"
                  for="specialStudent-Register"
                >
                  special student
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <p className="text-[1.25rem] px-[0.4rem]">Parents' Information</p>
            <div className={sectionContainer}>
              <div className={`${titleInputContainer} md:w-[60%]`}>
                <div className={titleText}>father's full name</div>
                <input
                  type="text"
                  name=""
                  value={dadName}
                  onChange={(e) => setDadName(e.target.value)}
                  id="dadNameInputId"
                  className={textInputStyle}
                />
              </div>
              <div className={`${titleInputContainer} md:w-[40%]`}>
                <div className={titleText}>occupation</div>
                <input
                  type="text"
                  name=""
                  value={dadJob}
                  onChange={(e) => setDadJob(e.target.value)}
                  id="dadOccupationInputId"
                  className={textInputStyle}
                />
              </div>
            </div>
            <div className={sectionContainer}>
              <div className={`${titleInputContainer} md:w-[50%]`}>
                <div className={titleText}>contact</div>
                <input
                  type="tel"
                  name=""
                  value={dadPhone}
                  onChange={(e) => setDadPhone(e.target.value)}
                  id="dadContactInputId"
                  className={textInputStyle}
                />
              </div>
              <div className={`${titleInputContainer} md:w-[50%]`}>
                <div className={titleText}>digital address</div>
                <input
                  type="text"
                  name=""
                  value={dadDigiAddress}
                  onChange={(e) => setDadDigiAddress(e.target.value)}
                  id="dadDigiAddressInputId"
                  className={textInputStyle}
                />
              </div>
            </div>
            <div className={sectionContainer}>
              <div className={`${titleInputContainer} md:w-[60%]`}>
                <div className={titleText}>mother's full name</div>
                <input
                  type="text"
                  name=""
                  value={mumName}
                  onChange={(e) => setMumName(e.target.value)}
                  id="mumNameInputId"
                  className={textInputStyle}
                />
              </div>
              <div className={`${titleInputContainer} md:w-[40%]`}>
                <div className={titleText}>occupation</div>
                <input
                  type="text"
                  name=""
                  value={mumJob}
                  onChange={(e) => setMumJob(e.target.value)}
                  id="mumOccupationInputId"
                  className={textInputStyle}
                />
              </div>
            </div>

            <div className={sectionContainer}>
              <div className={`${titleInputContainer} md:w-[50%]`}>
                <div className={titleText}>contact</div>
                <input
                  type="tel"
                  name=""
                  value={mumPhone}
                  onChange={(e) => setMumPhone(e.target.value)}
                  id="mumContactInputId"
                  className={textInputStyle}
                />
              </div>
              <div className={`${titleInputContainer} md:w-[50%]`}>
                <div className={titleText}>digital address</div>
                <input
                  type="text"
                  name=""
                  value={mumMumDigiAddress}
                  onChange={(e) => setMumDigiAddress(e.target.value)}
                  id="mumDigiAddressInputId"
                  className={textInputStyle}
                />
              </div>
            </div>
          </div>
          <div
            className={`px-[0.4rem] my-[0.5rem] pb-[1.5rem] flex flex-col items-center`}
          >
            <button
              className="bg-[#0073cf] text-[#fff] p-[0.25rem] w-full md:w-[20rem] rounded-md outline-none"
              id="registerButtonId"
              onClick={() => {
                handleRegisterStudent
              }}
            >
              register
            </button>
          </div>
          <div id="info"></div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
