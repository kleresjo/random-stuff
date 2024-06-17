import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styling/TotalPrice.css";
import { useNavigate } from "react-router-dom";

const TotalPrice = () => {
  const { cart, removeFromCart } = useContext(CartContext);

   const getTotalPrice = (cartToCount) => {
    return cartToCount.reduce((accumulator, object) => {
      return accumulator + object.price * object.itemCount;
    }, 0);
  };

   const formatPricing = (price) => {
    return price.toFixed(2);
  };


  const getTotalPriceWithDelivery = (product) => {
    return product.reduce((accumulator, object) => {
      return accumulator + object.itemCount * object.price;
    }, 49);
  };

  const navigate = useNavigate();

  const handlePaymentButton = () => {
    navigate("/confirmation");
  };

  return (
    <div className="total-price-container">
      <div className="total-price-space">
        <h3 className="total-price-h3">Summary</h3>
        <div className="total-price-row-container">
          <p className="total-price-text">Order value: </p>
          <p className="total-price-text"> {formatPricing(getTotalPriceWithDelivery(cart))} SEK</p>
        </div>

        <div className="total-price-row-container">
          <p className="total-price-text">Delivery fee:</p>
          <p className="total-price-text">49 SEK</p>
        </div>
        <hr className="total-price-hr" />
        <div className="total-price-row-container">
          <h2 className="total-price-h2">Total Price: </h2>
          <h2 className="total-price-h2">
            {formatPricing(getTotalPriceWithDelivery(cart))} SEK
          </h2>
        </div>
      </div>

      <div className="total-price-space-btn">
        <button onClick={handlePaymentButton} className="total-price-button">
          Finish the order
        </button>
      </div>
    </div>
  );
};

export default TotalPrice;
