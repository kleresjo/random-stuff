import React from "react";
import { CheckoutContext } from "../../context/CheckoutContext";
import useInput from "../../hooks/useInput";
import { useContext } from "react";
import "../../styling/InvoiceAdress.css";

const InvoiceAdress = () => {
  const { personalInformation, setPersonalInformation } =
    useContext(CheckoutContext);
  const firstNameInput = useInput();
  const lastNameInput = useInput();
  const adressInput = useInput();
  const zipCodeInput = useInput();
  const cityInput = useInput();
  const countryInput = useInput();

  return (
    <div className="invoice-adress-container">
      <form className="invoice-adress-form">
        <h3>Fakturaadress</h3>
        <input
          type="text"
          {...firstNameInput}
          placeholder="First Name"
          className="invoice-adress-input"
        />
        <input
          type="text"
          {...lastNameInput}
          placeholder="Last Name"
          className="invoice-adress-input"
        />
        <input
          type="text"
          {...adressInput}
          placeholder="Adress"
          className="invoice-adress-input"
        />
        <input
          type="text"
          {...zipCodeInput}
          placeholder="Zip Code"
          className="invoice-adress-input"
        />
        <input
          type="text"
          {...cityInput}
          placeholder="City"
          className="invoice-adress-input"
        />
        <input
          type="text"
          {...countryInput}
          placeholder="Country"
          className="invoice-adress-input"
        />
      </form>
    </div>
  );
};

export default InvoiceAdress;
