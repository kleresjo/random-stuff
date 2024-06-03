import React from "react";
import "../../styling/PaymentInformation.css";

const PaymentInformation = () => {
  return (
    <div className="payment-information-container">
      <div className="payment-information-content">
        <h3>Betalning</h3>
        <p>Hur vill du betala?</p>
        <div className="payment-information-radiobtn">
          <input type="radio" id="pay-direct" />{" "}
          <label for="pay-direct">Betala direkt</label>
        </div>
        <br />
        <div className="payment-information-radiobtn">
          <input type="radio" id="creditcard" />
          <label for="creditcard">Betalkort</label>
        </div>
        <br />
        <div className="payment-information-radiobtn">
          <input type="radio" id="invoice" />
          <label for="invoice">Faktura</label>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
