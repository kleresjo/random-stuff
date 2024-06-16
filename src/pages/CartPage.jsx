import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styling/CartPageStyling.css";
import { IoTrashOutline } from "react-icons/io5";

const CartPage = () => {
  const { cart, setCart, removeFromCart } = useContext(CartContext);

  const getCartTotal = (cartToCount) => {
    return cartToCount.reduce((accumulator, object) => {
      return accumulator + object.price * object.itemCount;
    }, 0);
  };

  const formatPrice = (price) => {
    return price.toFixed(2);
  };

  const addProduct = (index) => {
    const updatedCart = cart.map((p, i) => {
      if (i === index) {
        p.itemCount++;
        return p;
      } else {
        return p;
      }
    });
    setCart(updatedCart);
  };

  const removeProduct = (index) => {
    const updatedCart = cart.map((p, i) => {
      if (i === index) {
        p.itemCount--;
        return p;
      } else {
        return p;
      }
    });
    if (updatedCart[index].itemCount <= 0) {
      removeFromCart(updatedCart[index].id);
    } else {
      setCart(updatedCart);
    }
  };

  return (
    <div className="center-cart">
      <h2 className="about-h1">Shopping cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <h3 className="product-cart-h3">Your cart is empty!</h3>
          <Link to={"/"}>
            <button className="cart-link-btn-primary">Continue shopping</button>
          </Link>
        </div>
      ) : (
        <div className="cart-placing">
          <ul className="list-cart-placing">
            {cart.map((product, index) => (
              <li className="list-cart-content-placing" key={index}>
                <div className="list-cart-picture">
                  <img
                    className="img-cart-products"
                    src={product.image}
                    alt={product.title}
                  ></img>
                </div>
                <div className="list-cart-info">
                  <h3 className="product-cart-h3">{product.title}</h3>
                  <p className="product-cart-p"> {formatPrice(product.price)} SEK</p>

                  <p className="product-cart-p"> Quantity:</p>
                  <div className="shopping-cart-button-container">
                    <div className="shopping-cart-add-button-container">
                      <button onClick={() => addProduct(index)} className="add-remove-btn">+</button>
                      <p className="product-cart-p"> {product.itemCount}</p>
                      <button onClick={() => removeProduct(index)} className="add-remove-btn">-</button>
                    </div>
                    <div>
                      <button
                        className="cart-page-link-btn"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <IoTrashOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-right-side-placing">
            <div>
              <div className="shopping-cart-row">
                <p className="product-cart-p">Order value: </p>
                <p className="product-cart-p"> {formatPrice(getCartTotal(cart))} SEK</p>
              </div>
              <div className="shopping-cart-row">
                <p className="product-cart-p">Shipment:</p>
                <p className="product-cart-p"> {formatPrice(49)} SEK</p>
              </div>
              <hr className="cart-hr"></hr>
              <div className="shopping-cart-row">
                <h5 className="product-cart-h5">Total:</h5>
                <h5 className="product-cart-h5">{formatPrice(getCartTotal(cart) + 49)} SEK </h5>
              </div>
            </div>
            <div className="cart-btn-container">
              <Link to={"/payment"}>
                <button className="cart-link-btn-primary">Go to payment</button>
              </Link>
              <Link to={"/"}>
                <button className="cart-link-btn-secondary">Continue shopping!</button>
              </Link>
              <p className="product-cart-p">We take Klarna, Mastercard, Paypal and Visa</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
