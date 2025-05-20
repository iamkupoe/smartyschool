import React from 'react';

const ResetPassword = () => {
  const inputStyles =
    'border border-[#000] p-[0.3rem] bg-transparent mb-[1.7rem] text-black';
  return (
    <div className="flex flex-row justify-center items-center h-[88vh] sm:w-[100%]">
      <div className="flex sm:w-[95%]sm:p-[0.25rem] xl:w-[40%] sm:h-[90%] md:h-[60%] p-[2rem] flex-col bg-slate-100 ">
        <h2 className="text-black font-semibold text-xl pb-2 text-center">
          Reset Password
        </h2>
        <input
          type="password"
          placeholder="old password"
          className={`${inputStyles}`}
        />
        <input
          type="password"
          placeholder="new password"
          className={`${inputStyles}`}
        />
        <input
          type="password"
          placeholder="confirm password"
          className={`${inputStyles}`}
        />
        <input
          type="button"
          value="Reset"
          className="bg-sky-700 text-white p-1"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
