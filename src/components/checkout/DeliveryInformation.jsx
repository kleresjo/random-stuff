import React from "react";
import { CheckoutContext } from "../../context/CheckoutContext";
import useInput from "../../hooks/useInput";
import { useContext } from "react";
import "../../styling/DeliveryInformation.css";

const DeliveryInformation = () => {
  const { personalInformation, setPersonalInformation } =
    useContext(CheckoutContext);
  const firstNameInput = useInput();
  const lastNameInput = useInput();
  const phoneInput = useInput();
  return (
    <div className="delivery-information-container">
      <form className="delivery-information-form">
        <h3 className="delivery-information-h3">Delivery</h3>
        <input
          type="text"
          {...firstNameInput}
          placeholder="First Name"
          className="delivery-information-input"
        />
        <input
          type="text"
          {...lastNameInput}
          placeholder="Last Name"
          className="delivery-information-input"
        />
        <input
          type="text"
          {...phoneInput}
          placeholder="Phone number +46"
          className="delivery-information-input"
        />
        <div className="post-information">
          <h4>PostNord - Service point</h4>
          <p>3-5 working days</p>
          <p>Willys Ingenmansland</p>
          <p>Ingemansväg 3</p>
          <p>123 45 Ingenmansland</p>
          <p>Sweden</p>
        </div>
      </form>
    </div>
  );
};

export default DeliveryInformation;
