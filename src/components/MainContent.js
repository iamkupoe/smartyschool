import React from "react";
import "../css/MainContent.css";

function MainContent() {
  return (
    <div className="grid-container">
      <div className="phase1">
        <div className="grid-tuition">
           <h4>Tuition Fees</h4>
          <p id="expectedText">Expected Fees</p>
          <p id="expectedValue">{" GH\u20B5"}10,500.00</p>
          <p id="expectedText">Paid Fees</p>
          <p id="expectedValue">{" GH\u20B5"}8,500.00</p>
          <p id="expectedText">Balance</p>
          <p id="expectedValue">{" GH\u20B5"}2,000.00</p>
        </div>
        <br/>
        <div className="toiletories">
        <h4>Toiletories</h4>
          <p id="expectedText">Expected Fees</p>
          <p id="expectedValue">{" GH\u20B5"}2,500.00</p>
          <p id="expectedText">Paid Fees</p>
          <p id="expectedValue">{" GH\u20B5"}2,000.00</p>
          <p id="expectedText">Balance</p>
          <p id="expectedValue">{" GH\u20B5"}500.00</p>
        </div>
      </div>
      <div className="phase2">
        <div className="exam">
        <h4>Exam Fees</h4>
          <p id="expectedText">Expected Fees</p>
          <p id="expectedValue">{" GH\u20B5"}1,000.00</p>
          <p id="expectedText">Paid Fees</p>
          <p id="expectedValue">{" GH\u20B5"}800.00</p>
          <p id="expectedText">Balance</p>
          <p id="expectedValue">{" GH\u20B5"}200.00</p>
        </div>
        <br/>
        <div className="feeding">
         <h4>Feeding Fees</h4>
          <p id="expectedText">Expected Fees</p>
          <p id="expectedValue">{" GH\u20B5"}4,000.00</p>
          <p id="expectedText">Paid Fees</p>
          <p id="expectedValue">{" GH\u20B5"}3,000.00</p>
          <p id="expectedText">Balance</p>
          <p id="expectedValue">{" GH\u20B5"}1,000.00</p>
        </div>
      </div>
      <div className="phase3">
        <div className="transport">
        <h4>Transport Fees</h4>
          <p id="expectedText">Expected Fees</p>
          <p id="expectedValue">{" GH\u20B5"}3,000.00</p>
          <p id="expectedText">Paid Fees</p>
          <p id="expectedValue">{" GH\u20B5"}2,500.00</p>
          <p id="expectedText">Balance</p>
          <p id="expectedValue">{" GH\u20B5"}500.00</p>
        </div>
        <br/>
        <div className="enrolment">
        <h4>Enrolment</h4>
          <p id="expectedText">Total</p>
          <p id="expectedValue">150</p>
          <p id="expectedText">Boys</p>
          <p id="expectedValue">70</p>
          <p id="expectedText">Girls</p>
          <p id="expectedValue">80</p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
