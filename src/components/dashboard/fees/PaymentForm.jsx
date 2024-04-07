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
    'px-[0.4rem] flex flex-col md:flex-row md:gap-[0.5rem]';
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

  return (
    <div className="mx-[0.5rem]">
      <div>
        <div>
          <h2>Dashen Hills Montessori</h2>
          <h3>Payment Form</h3>
        </div>
        <form>
          <div className={sectionContainer}>
            <div className={`${titleInputContainer} md:w-[27%]`}>
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
            <div className={`${titleInputContainer} md:w-[27%]`}>
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
            <div className={`${titleInputContainer} md:w-[27%]`}>
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
            <div className={`${titleInputContainer} md:w-[27%]`}>
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
          <div>
            <div className={`${titleInputContainer} md:w-[27%]`}>
              <div className={titleText}>Paid for</div>

              {
                <Select
                  value={selectedOption}
                  onChange={handleChosenOption}
                  isSearchable={true}
                  options={options}
                  placeholder="Enter student name to search"
                />
              }
            </div>
          </div>
          <div className={sectionContainer}>
            <div className={`${titleInputContainer} md:w-[27%]`}>
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
              className={`${titleInputContainer} md:w-[27%] ${
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
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
