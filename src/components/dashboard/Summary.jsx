import React from 'react';
import '../../css/Summary.css';
import { summaryData } from '../Constants';
import FeesComponent from './FeesComponent';

function Summary() {
  return (
    <div className="main-container">
      <div className="fees-container">
        <h2>Fees payment</h2>
        <div className='categories-box'>
          {summaryData.map((datum, index) => {
            return (
              <FeesComponent
                icon={datum.icon}
                type={datum.name}
                expected={datum.expected}
                paid={datum.paid}
                balance={datum.balance}
              />
            );
          })}
        </div>
      </div>
      <div className="enrollment-attendance-container">
        <div className="enrollment-container"></div>
        <div className="attendanc-container"></div>
      </div>
    </div>
  );
}

export default Summary;
