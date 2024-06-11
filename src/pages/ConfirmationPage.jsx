import React from "react";
import "../styling/ConfirmationPage.css";
import checkcircle from "../assets/check-circle.png";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handleShoppingButton = () => {
    navigate("/");
  };
  return (
    <>
      <div className="confirmation-page-container">
        <div>
          <img src={checkcircle} alt="" />
          <p className="confirmation-page-text">
            Thank you for shopping with RandomStuff
          </p>
          <h1 className="confirmation-page-h1">Order Confirmation!</h1>
          <p className="confirmation-page-text">
            We have received your order and a receipt has been sent to your
            email address.
          </p>
          <p className="confirmation-page-text">Ordernumber: 678319782</p>
        </div>
        <div>
          <button onClick={handleShoppingButton} className="total-price-button">
            Continue shopping!
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
