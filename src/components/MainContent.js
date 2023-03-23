import React from "react";
import "../css/MainContent.css";

function MainContent() {
  return (
    <div className="grid-container">
      <div className="phase1">
        <div className="grid-tuition">
          <h5 id="title">Expected</h5>
          <p id="sub">{" GH\u20B5"}</p>
          <h5 id="title">Paid</h5>
          <p id="sub">{" GH\u20B5"}</p>
          <h5 id="title">Balance</h5>
          <p id="sub">{" GH\u20B5"}</p>
        </div>
        <div className="toiletories">
          <h5>Expected</h5>
          <p>{" GH\u20B5"}</p>
          <h5>Paid</h5>
          <p>{" GH\u20B5"}</p>
          <h5>Balance</h5>
          <p>{" GH\u20B5"}</p>
        </div>
      </div>
      <div className="phase2">
        <div className="exam">
          <h5>Expected</h5>
          <p>{" GH\u20B5"}</p>
          <h5>Paid</h5>
          <p>{" GH\u20B5"}</p>
          <h5>Balance</h5>
          <p>{" GH\u20B5"}</p>
        </div>
        <div className="feeding">
          <h5>Expected</h5>
          <p>{" GH\u20B5"}</p>
          <h5>Paid</h5>
          <p>{" GH\u20B5"}</p>
          <h5>Balance</h5>
          <p>{" GH\u20B5"}</p>
        </div>
      </div>
      <div className="phase3">
        <div className="transport">
          <h5>Expected</h5>
          <p>{" GH\u20B5"}</p>
          <h5>Paid</h5>
          <p>{" GH\u20B5"}</p>
          <h5>Balance</h5>
          <p>{" GH\u20B5"}</p>
        </div>
        <div className="enrolment">
          <h5>Expected</h5>
          <p>{" GH\u20B5"}</p>
          <h5>Paid</h5>
          <p>{" GH\u20B5"}</p>
          <h5>Balance</h5>
          <p>{" GH\u20B5"}</p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
