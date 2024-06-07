import React, { useContext } from "react";
import { CheckoutContext } from "../../context/CheckoutContext";
import useInput from "../../hooks/useInput";
import "../../styling/MyInformation.css";

const MyInformation = () => {
  const { personalInformation, setPersonalInformation } =
    useContext(CheckoutContext);
  const firstNameInput = useInput();
  const lastNameInput = useInput();
  const emailInput = useInput();

  return (
    <div className="my-information-container">
      <form className="my-information-form">
        <h3 className="my-information-h3">My information</h3>
        <input
          type="text"
          {...firstNameInput}
          placeholder="First Name"
          className="my-information-input"
        />
        <input
          type="text"
          {...lastNameInput}
          placeholder="Last Name"
          className="my-information-input"
        />
        <input
          type="text"
          {...emailInput}
          placeholder="Email @"
          className="my-information-input"
        />
      </form>
    </div>
  );
};

export default MyInformation;
