import React, { useState } from 'react';
import logo from '../../../assets/images/school_logo.png';

const RegistrationForm = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const handleFileChange = (e, setImageState) => {
    const selectedFile = e.target.files[0];
    setImageState(selectedFile);
  };

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

  return (
    <div className="bg-[#fff]">
      <div className="h-[88vh] overflow-y-auto">
        <div className="px-[3%] md:px-[2%]">
          <div className="flex flex-row justify-between items-start p-[0.2rem] border-b ">
            <div className="w-[4.5rem] h-[4.5rem] p-[0.5rem] border">
              <img src={logo} className="w-[100%]" alt="school crest" />
            </div>
            <div className="self-center">
              <h2 className="text-[0.8rem] text-center leading-tight">
                Dashen Hills Montessori
              </h2>

              <h2 className="text-[0.8rem] text-center">Admission Form</h2>
            </div>

            <div className=" flex flex-col items-center w-[4.5rem] h-[4.5rem]">
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
                    className="self-center w-[3.5rem] h-[3.5rem] m-[0] p-[0]"
                  />
                ) : (
                  <h2 className="text-[0.6rem] w-[3.5rem] h-[3.5rem] font-center">
                    upload student image
                  </h2>
                )}
                <div className="m-0 p-0 h-[0.7rem] flex flex-row justify-center items-center">
                  <span className="text-bolder text-[0.6rem]  text-[#000000] m-0 p-0 self-center">
                    ID:
                  </span>
                  <span className="text-[0.6rem] m-0 p-0 self-center">
                    0000000000
                  </span>
                </div>
              </label>
            </div>
          </div>
          <div className="px-[0.4rem] flex flex-col  ">
            <div className="dateLabelAndInputContainer-Register">
              <div className="dateLabel-Register">date</div>
              <input
                type="date"
                name=""
                id="dateInputId"
                className="border-[#eee]"
              />
            </div>

            <div className="academicYrLabelInputContainer-Register">
              <div className="academicYrLabel-Register">academic year</div>
              <input
                type="text"
                name=""
                id="academicYrInputId"
                className="academicYrInput-Register"
              />
            </div>
            <div className="classLabelSelectionContainer-Register">
              <div className="classLabel-Register">class</div>
              <select name="" id="class">
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
                <option value="JHS3">J. H. S 2</option>
              </select>
            </div>
            <div className="termContainer-Register">
              <div className="termLabel-Register">term</div>
              <select name="" id="term">
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
              </select>
            </div>
          </div>

          <div className="surnameAndOtherNamesContainer">
            <div className="surnameLabelInputContainer-Register">
              <div className="surnameLabel-Register">surname</div>
              <input
                type="text"
                name=""
                id="surnameInputId"
                className="surnameInput-Register"
              />
            </div>
            <div className="otherNamesLabelInputContainer-Register">
              <div className="otherNamesLabel-Register">other names</div>
              <input
                type="text"
                name=""
                id="otherNamesInputId"
                className="otherNamesInput-Register"
              />
            </div>
          </div>
          <div className="genderDOBAndPOBContainer">
            <div className="DOBLabelAndInputContainer-Register">
              <div className="DOBLabel-Register">date of birth</div>
              <input
                type="date"
                name=""
                id="DOBInputId"
                className="DOBInput-Register"
              />
            </div>

            <div className="placeOfBirthLabelInputContainer-Register">
              <div className="placeOfBirthLabel-Register">place of birth</div>
              <input
                type="text"
                name=""
                id="placeOfBirthInputId"
                className="placeOfBirthInput-Register"
              />
            </div>
            <div className="genderLabelSelectContainer-Register">
              <div className="genderLabel-Register">gender</div>
              <select name="" id="gender">
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
          </div>

          <div className="nationalityReligionDigiAddressPOBContainer">
            <div className="nationalityLabelInputContainer-Register">
              <div className="nationalityLabel-Register">naitonality</div>
              <input
                type="text"
                name=""
                id="nationalityInputId"
                className="nationalityInput-Register"
              />
            </div>

            <div className="religionLabelInputContainer-Register">
              <div className="religionLabel-Register">religion</div>
              <input
                type="text"
                name=""
                id="religionInputId"
                className="religionInput-Register"
              />
            </div>

            <div className="digiAddressLabelInputContainer-Register">
              <div className="digiAddressLabel-Register">digital address</div>
              <input
                type="text"
                className="digiAddressInput-Register"
                id="studentDigiAddressId"
              />
            </div>
          </div>
          <div className="transportSpecialRadioInputContainer-Register">
            <div className="transportStatusInputLabelContainer-Register">
              <div className="transportStatusInputContainer">
                <input
                  type="checkbox"
                  name="transportStatus"
                  className="transport-Register"
                  id="transportId-Register"
                />
              </div>
              <div className="transportStatusLabelContainer">
                <label className="transportLabel" for="transportStatus">
                  transport
                </label>
              </div>
            </div>
            <div className="specialStudentInputLabelContainer-Register">
              <div className="specialStudentInputContainer">
                <input
                  type="checkbox"
                  name="specialStudentStatusCheckbox"
                  className="specialStudentStatus"
                  id="specialStudentId-Register"
                />
              </div>
              <div className="specialStudentLabelContainer">
                <label
                  className="specialStudentLabel"
                  for="specialStudent-Register"
                >
                  special student
                </label>
              </div>
            </div>
          </div>

          <div className="parentInfoSectionContainer-Register">
            <p className="parentInfoTitleText">Parents' Information</p>
            <div className="dadNameAndOccupationContainer">
              <div className="dadNameLabelInputContainer-Register">
                <div className="dadNameLabel-Register">father's full name</div>
                <input
                  type="text"
                  name=""
                  id="dadNameInputId"
                  className="dadNameInput-Register"
                />
              </div>
              <div className="dadOccupationLabelInputContainer-Register">
                <div className="dadOccupationLabel-Register">occupation</div>
                <input
                  type="text"
                  name=""
                  id="dadOccupationInputId"
                  className="dadOccupationInput-Register"
                />
              </div>
            </div>
            <div className="dadContactDigiAddressContainer">
              <div className="contactLabelInputContainer-Register">
                <div className="contactLabel-Register">contact</div>
                <input
                  type="tel"
                  name=""
                  id="dadContactInputId"
                  className="contactInput-Register"
                />
              </div>
              <div className="parentDigiAddressLabelInputContainer-Register">
                <div className="parentDigiAddressLabel-Register">
                  digital address
                </div>
                <input
                  type="text"
                  name=""
                  id="dadDigiAddressInputId"
                  className="parentDigiAddressInput-Register"
                />
              </div>
            </div>
            <div className="mumNameAndOccupationContainer">
              <div className="mumNameLabelInputContainer-Register">
                <div className="mumNameLabel-Register">mother's full name</div>
                <input
                  type="text"
                  name=""
                  id="mumNameInputId"
                  className="mumNameInput-Register"
                />
              </div>
              <div className="mumOccupationLabelInputContainer-Register">
                <div className="mumOccupationLabel-Register">occupation</div>
                <input
                  type="text"
                  name=""
                  id="mumOccupationInputId"
                  className="mumOccupationInput-Register"
                />
              </div>
            </div>

            <div className="mumContactDigiAddressContainer">
              <div className="contactLabelInputContainer-Register">
                <div className="contactLabel-Register">contact</div>
                <input
                  type="tel"
                  name=""
                  id="mumContactInputId"
                  className="contactInput-Register"
                />
              </div>
              <div className="parentDigiAddressLabelInputContainer-Register">
                <div className="parentDigiAddressLabel-Register">
                  digital address
                </div>
                <input
                  type="text"
                  name=""
                  id="mumDigiAddressInputId"
                  className="parentDigiAddressInput-Register"
                />
              </div>
            </div>
          </div>
          <div className="registerButtonContainer">
            <button className="registerButton" id="registerButtonId">
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
