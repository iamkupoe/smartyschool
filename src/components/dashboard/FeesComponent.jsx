import React from 'react';
import '../../css/FeesComponent.css';

const FeesComponent = ({ icon, type,expected,balance,paid }) => {
  return (
    <div className='fees-component-main-box'>
      <div className='icon-box'>
        {icon}       
      </div>
      <div className='info-section'>
      <h2 className='title-text'>{type}</h2>
        <p className='expected-title-value-box'>
          <span className='metrics-title'>Expected:</span>
          <span className='metrics-value'>{expected}</span>
        </p>
        <p className='paid-title-value-box'>
          <span className='metrics-title'>Paid:</span>
          <span className='metrics-value'>{paid}</span>
        </p>
        <p className='balance-title-value-box'>
          <span className='metrics-title'>Balance:</span>
          <span className='metrics-value'>{balance}</span>
        </p>
      </div>
    </div>
  );
};

export default FeesComponent;
