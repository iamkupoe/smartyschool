import React from 'react';
import "../../css/Register.css"

const Register = () => {
  return (
    <main>
      <div class="registerScreenMainContainer">
        <div class="registerScreenMenuBar">
          <button
            class="paymentTab-register"
            id="paymentTabId"
            onclick="ClickRegisterBookTab()"
          >
            <span class="icon icon-book registerBookTabIcon"></span>
          </button>
          <button class="receiptTab-register" onclick="ClickRegisterTab()">
            <span class="icon icon-user-add registerTabIcon"></span>
          </button>
        </div>
        <section></section>
      </div>
    </main>
  );
};

export default Register;
