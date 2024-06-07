import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styling/CartPageStyling.css";

const CartPage = () => {
  const { cart, setCart, removeFromCart } = useContext(CartContext);

  const getCartTotal = (cartToCount) => {
    return cartToCount.reduce((accumulator, object) => {
      return accumulator + object.price * object.itemCount;
    }, 0);
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
    <>
      <div className="center-cart">
        <h2>CartPage</h2>
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
                  <h3>{product.title}</h3>
                  <p> {product.price} :-</p>

                  <div>
                    <button onClick={() => addProduct(index)}>+</button>

                    <p>{product.itemCount}</p>

                    <button onClick={() => removeProduct(index)}>-</button>
                  </div>

                  <button
                    className="cart-page-link-btn"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-right-side-placing">
            <p>Total Price: {getCartTotal(cart)} kr</p>
            <div>
              <Link to={"/"}>
                <button className="cart-link-btn">Continue shopping</button>
              </Link>
              <Link to={"/payment"}>
                <button className="cart-link-btn">Go to payment</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
