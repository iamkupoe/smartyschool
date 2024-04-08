import React, { useState } from 'react';
import Select from 'react-select';
import { Registrations } from '../../Constants';

const PaymentForm = () => {
  const [paidAs, setPaidAs] = useState('');
  const [paidby, setPaidBy] = useState('');
  const [payerContact, setPayerContact] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const titleInputContainer = 'mb-[0.5rem]';
  const titleText = 'font-bold w-full';
  const sectionContainer =
    'px-[0.4rem] flex flex-col md:flex-row md:gap-[0.5rem] md:my-[0.75rem]';
  const textInputStyle =
    'border border-[#525252] rounded-sm px-[0.2rem] py-[0.1rem] w-full outline-none';

  const options = Registrations.map((registrant) => {
    return {
      value: `${registrant.surname} ${registrant.otherNames}`,
      label: `${registrant.surname} ${registrant.otherNames}`,
    };
  });

  const handleChosenOption = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleChangePayMode = (e) => {
    setPaymentMode(e.target.value);
  };

  const customStyles = {
    control: (provide) => ({
      ...provide,
      border: '1px solid #525252',
    }),
  };

  return (
    <div
      className="mx-[0.4rem] my-[1.5rem] sm:mx-[3rem] sm:my-[3rem] lg:mx-[6rem] xl:mx-[7rem]  h-[70vh] overflow-y-auto"
      style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
    >
      <div className="p-[0.3rem] sm:p-[2rem] xl:px-[4rem] border border-[#eeeeee] shadow-xl ">
        <div className="px-[0.4rem] flex flex-col md:gap-[0.5rem] border-b border-b-[#eeeeee] pb-[1rem]">
          <h2 className="font-bold text-center text-[1.3rem] lg:text-[2.2rem]">
            Dashen Hills Montessori
          </h2>
          <h3 className="text-center text-[1rem] lg:text-[1.5rem] font-bold">
            Payment Form
          </h3>
        </div>
        <form className="py-[1rem]">
          <div className={sectionContainer}>
            <div className={`${titleInputContainer} md:w-[50%]`}>
              <div className={titleText}>Amount</div>
              <input
                type="text"
                name=""
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                id="academicYrInputId"
                className={textInputStyle}
              />
            </div>
            <div className={`${titleInputContainer} md:w-[50%]`}>
              <div className={titleText}>Paid as</div>
              <input
                type="text"
                name=""
                placeholder="Eg. Tuition"
                value={paidAs}
                onChange={(e) => setPaidAs(e.target.value)}
                id="academicYrInputId"
                className={textInputStyle}
              />
            </div>
          </div>
          <div className={sectionContainer}>
            <div className={`${titleInputContainer} md:w-[65%]`}>
              <div className={titleText}>Paid by</div>
              <input
                type="text"
                name=""
                value={paidby}
                onChange={(e) => setPaidBy(e.target.value)}
                id="academicYrInputId"
                className={textInputStyle}
              />
            </div>
            <div className={`${titleInputContainer} md:w-[35%]`}>
              <div className={titleText}>Payer's contact</div>
              <input
                type="text"
                name=""
                value={payerContact}
                onChange={(e) => setPayerContact(e.target.value)}
                className={textInputStyle}
              />
            </div>
          </div>
          <div className={sectionContainer}>
            <div className={`${titleInputContainer} md:w-full`}>
              <div className={titleText}>Paid for</div>

              {
                <Select
                  value={selectedOption}
                  onChange={handleChosenOption}
                  isSearchable={true}
                  options={options}
                  styles={customStyles}
                  placeholder="Enter student name to search"
                />
              }
            </div>
          </div>
          <div className={sectionContainer}>
            <div className={`${titleInputContainer} md:w-[50%]`}>
              <div className={titleText}>Payment mode</div>
              <select
                value={paymentMode}
                className={textInputStyle}
                onChange={handleChangePayMode}
              >
                <option value="cash">cash</option>
                <option value="momo">momo</option>
              </select>
            </div>
            <div
              className={`${titleInputContainer} md:w-[50%] ${
                paymentMode === 'momo' ? 'block' : 'hidden'
              }`}
            >
              <div className={titleText}>Transacton Id</div>
              <input
                type="text"
                name=""
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className={textInputStyle}
              />
            </div>
          </div>
          <div className={`${sectionContainer} my-[1rem] justify-center`}>
            <button className="bg-[#0073cf] text-[#fff] p-[0.25rem] w-full md:w-[20rem] rounded-md outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
