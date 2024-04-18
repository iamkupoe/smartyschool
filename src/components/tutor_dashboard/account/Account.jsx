import React from 'react';
import profilePic from '../../../assets/images/profile.jpg';

const Account = () => {
  const labelInputBox = 'flex flex-col justify-start align-center mb-[0.5rem]';
  const inputStyle = 'border border-[#000000]';
  const labelStyle = '';
  return (
    <div>
      <div className="">
        <div className="h-[12vh] border-b border-b-[#c8c8c8]"></div>
        <div className="mx-[0.5rem] md:[1rem] p-[0.75rem] md:p-[2rem] flex flex-col h-[80vh] overflow-y-auto">
          <div className="self-end">edit icon</div>
          <div className="flex flex-col sm:flex-row gap-[1rem]">
            <div className="w-full h-[40%] sm:h-[80%] md:w-[50%] md:h-[70%]">
              <img src={profilePic} className="h-full w-full" />
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
                    disabled
                  />
                </div>
                <div className={labelInputBox}>
                  <label className={labelStyle} htmlFor="">
                    Phone
                  </label>
                  <input className={inputStyle} type="tel" name="phone" id="" />
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
                  />
                </div>
                <input
                  type="submit"
                  className="bg-[#0073cf] my-[0.5rem] text-[#fff] p-[0.25rem] w-full  rounded-md outline-none"
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
