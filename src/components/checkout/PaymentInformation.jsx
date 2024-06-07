import React from "react";
import "../../styling/PaymentInformation.css";

const PaymentInformation = () => {
  return (
    <div className="payment-information-container">
      <div className="payment-information-content">
        <h3>Payment</h3>
        <p>How do you want to pay?</p>
        <div className="payment-information-radiobtn">
          <input type="radio" id="pay-direct" />{" "}
          <label for="pay-direct">Pay now</label>
        </div>
        <br />
        <div className="payment-information-radiobtn">
          <input type="radio" id="creditcard" />
          <label for="creditcard">Credit card</label>
        </div>
        <br />
        <div className="payment-information-radiobtn">
          <input type="radio" id="invoice" />
          <label for="invoice">Invoice</label>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
