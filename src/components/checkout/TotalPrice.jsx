import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styling/TotalPrice.css";
import { useNavigate } from "react-router-dom";

const TotalPrice = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const getTotalPrice = (product) => {
    return product.reduce((accumulator, object) => {
      return accumulator + object.price;
    }, 0);
  };

  const getTotalPriceWithDelivery = (product) => {
    return product.reduce((accumulator, object) => {
      return accumulator + object.price;
    }, 49);
  };

  const navigate = useNavigate();

  const handlePaymentButton = () => {
    navigate("/confirmation");
  };

  return (
    <div className="total-price-container">
      <h3>Summary</h3>
      <p>Price: {getTotalPrice(cart)} kr</p>
      <p>Delivery fee: 49kr</p>
      <h2>Total Price: {getTotalPriceWithDelivery(cart)} kr</h2>
      <div>
        <button onClick={handlePaymentButton} className="total-price-button">
          Buy
        </button>
      </div>
    </div>
  );
};

export default TotalPrice;
