import React, { useState } from 'react';
import { LiaUserEditSolid } from 'react-icons/lia';
import profilePic from '../../../assets/images/profile.jpg';
import { inputStyle, labelStyle } from '../../Constants';

const Account = () => {
  const labelInputBox = 'flex flex-col justify-start align-center mb-[0.5rem]';


  const [disability, setDisability] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');

  const handleEnableInput = () => {
    setDisability(!disability);
  };

  const handleSelectImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();
      img.onload = () => {
        if (img.width === img.height) {
          // Aspect ratio is 1:1
          setSelectedImage(reader.result);
        } else {
          // Aspect ratio is not 1:1
          alert('Please select an image with a 1:1 aspect ratio.');
        }
      };
      img.src = e.target.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    
  };

  return (
    <div>
      <div className="">
        <div className="mx-[0.5rem] md:mx-[1rem] p-[0.75rem] md:p-[2rem] lg:mx-[2rem] lg:p-[2rem] flex flex-col h-[80vh] overflow-y-auto">
          <div className="self-end">
            <button
              className="outline-none bg-transparent"
              onClick={handleEnableInput}
            >
              <LiaUserEditSolid
                className={`text-[1.5rem]  ${!disability ? 'text-[#2D54C8]' : 'text-[#000000]'
                  } `}
              />
            </button>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start gap-[1rem] h-[70vh]">
            <div className="w-full h-[50vh] sm:h-[55%] md:w-[50%] md:h-[70%] lg:h-[50vh] lg:w-[50%]">
              <input
                type="file"
                accept="image/*"
                name=""
                id="imageInput"
                className="hidden"
                onChange={handleSelectImage}
              />
              <label htmlFor="imageInput" className="cursor-pointer mb-4 ">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full h-full object-contain object-center"
                  />
                ) : (
                  <div className="border-2 border-dashed border-gray-400 w-full h-64 lg:h-80 xl:h-120 flex items-center justify-center">
                    <span className="text-gray-400">Select an Image</span>
                  </div>
                )}
              </label>
            </div>
            <div className="md:w-[50%]">
              <form action="" method="post">
                <div className={labelInputBox}>
                  <label className={labelStyle} htmlFor="">
                    Full name
                  </label>
                  <input
                    className={inputStyle}
                    type="text"
                    name="fullname"
                    id=""
                    disabled={disability}
                  />
                </div>
                <div className={labelInputBox}>
                  <label className={labelStyle} htmlFor="">
                    Phone
                  </label>
                  <input
                    className={inputStyle}
                    type="tel"
                    name="phone"
                    id=""
                    disabled={disability}
                  />
                </div>
                <div className={labelInputBox}>
                  <label className={labelStyle} htmlFor="">
                    Email
                  </label>
                  <input
                    className={inputStyle}
                    type="text"
                    name="email"
                    id=""
                    disabled={disability}
                  />
                </div>
                <div className={labelInputBox}>
                  <label className={labelStyle} htmlFor="">
                    Location
                  </label>
                  <input
                    className={inputStyle}
                    type="text"
                    name="location"
                    id=""
                    disabled={disability}
                  />
                </div>
                <input
                  type="submit"
                  className="bg-[#0073cf] my-[0.5rem] text-[#fff] text-[1rem] lg:text-[1.5rem] p-[0.25rem] lg:p-[0.3rem] w-full  rounded-md outline-none"
                  value="Update"
                  name="Update"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
